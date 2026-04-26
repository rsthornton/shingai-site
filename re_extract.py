#!/usr/bin/env python3
"""Re-extract Ghost posts using HTML field with proper markdown conversion."""

import json
import os
import re
from datetime import datetime
from pathlib import Path

from markdownify import MarkdownConverter

GHOST_JSON = Path(__file__).parent / "shingai-thornton.ghost.2026-01-19-19-13-27.json"
OUTPUT_DIR = Path(__file__).parent / "src" / "content" / "archive"
IMAGES_DIR = Path(__file__).parent / "public" / "images" / "archive"


def build_image_map(slug):
    """Return set of image filenames available locally for this slug."""
    img_dir = IMAGES_DIR / slug
    if not img_dir.is_dir():
        return set()
    return {f.name for f in img_dir.iterdir() if f.name != "headshot.jpeg"}


def remap_ghost_urls(markdown, slug, available_images):
    """Replace __GHOST_URL__ references with local paths."""
    warnings = []

    def replace_image(match):
        filename = match.group("filename")
        if filename in available_images:
            return f"/images/archive/{slug}/{filename}"
        warnings.append(f"  No local image: {filename}")
        return match.group(0)

    markdown = re.sub(
        r"__GHOST_URL__/content/images/(?:size/w\d+/)?(?:\d{4}/\d{2}/)(?P<filename>[^\s\)\"]+)",
        replace_image,
        markdown,
    )

    file_links = list(re.finditer(
        r"\[([^\]]*)\]\(__GHOST_URL__/content/files/[^\)]+\)",
        markdown,
    ))
    for m in reversed(file_links):
        warnings.append(f"  Removed dead Ghost file link: {m.group(1)}")
        markdown = markdown[:m.start()] + markdown[m.end():]

    markdown = re.sub(
        r"__GHOST_URL__/(?!content/)([a-z0-9][a-z0-9\-]*/)",
        r"/archive/\1",
        markdown,
    )

    return markdown, warnings


class GhostConverter(MarkdownConverter):

    def convert_figure(self, el, text, parent_tags):
        img = el.find("img")
        caption = el.find("figcaption")
        iframe = el.find("iframe")

        if iframe:
            return self.convert_iframe(iframe, "", parent_tags)

        if img:
            img_md = self.convert_img(img, "", parent_tags)
            if caption:
                caption_text = self.process_tag(caption, parent_tags).strip()
                return f"\n\n{img_md}\n*{caption_text}*\n\n"
            return f"\n\n{img_md}\n\n"

        return text

    def convert_iframe(self, el, text, parent_tags):
        src = el.get("src", "")
        title = el.get("title", "Video")
        yt_match = re.search(r"youtube\.com/embed/([^?\s]+)", src)
        if yt_match:
            video_id = yt_match.group(1)
            return f"\n\n[{title}](https://www.youtube.com/watch?v={video_id})\n\n"
        if src:
            return f"\n\n[{title}]({src})\n\n"
        return ""

    def convert_script(self, el, text, parent_tags):
        return ""

    def convert_div(self, el, text, parent_tags):
        classes = el.get("class", [])
        if "kg-file-card" in classes:
            link = el.find("a")
            title_div = el.find(class_="kg-file-card-title")
            filename_div = el.find(class_="kg-file-card-filename")
            if link and title_div:
                href = link.get("href", "")
                name = title_div.get_text(strip=True)
                size_div = el.find(class_="kg-file-card-filesize")
                size = f" ({size_div.get_text(strip=True)})" if size_div else ""
                return f"\n\n[{name}{size}]({href})\n\n"
        return text


def parse_date(date_str):
    if not date_str:
        return None
    try:
        dt = datetime.fromisoformat(date_str.replace("Z", "+00:00"))
        return dt.strftime("%Y-%m-%d")
    except ValueError:
        return None


def get_year(date_str):
    if not date_str:
        return "0000"
    try:
        dt = datetime.fromisoformat(date_str.replace("Z", "+00:00"))
        return dt.strftime("%Y")
    except ValueError:
        return "0000"


def build_frontmatter(post):
    title = post["title"].replace('"', '\\"')
    slug = post["slug"]
    date = parse_date(post.get("created_at"))
    updated = parse_date(post.get("updated_at"))
    excerpt = post.get("custom_excerpt")

    lines = ["---"]
    lines.append(f'title: "{title}"')
    lines.append(f'permalink: "{slug}"')
    if date:
        lines.append(f"date: {date}")
    if updated and updated != date:
        lines.append(f"updated: {updated}")
    if excerpt:
        escaped = excerpt.replace('"', '\\"')
        lines.append(f'description: "{escaped}"')
    lines.append("---")
    return "\n".join(lines)


def clean_markdown(text):
    text = re.sub(r"\n{3,}", "\n\n", text)
    lines = [line.rstrip() for line in text.split("\n")]
    return "\n".join(lines).strip() + "\n"


def extract_posts():
    with open(GHOST_JSON) as f:
        data = json.load(f)

    posts = data["db"][0]["data"]["posts"]
    converter = GhostConverter(heading_style="ATX", strip=["span"])

    stats = {"written": 0, "skipped_no_html": 0, "skipped_draft": 0}
    all_warnings = []

    for post in posts:
        if post.get("status") != "published":
            stats["skipped_draft"] += 1
            continue

        html = post.get("html")
        if not html:
            stats["skipped_no_html"] += 1
            print(f"  SKIP (no html): {post['slug']}")
            continue

        slug = post["slug"]
        year = get_year(post.get("created_at"))
        filename = f"{year}-{slug}.md"

        body = converter.convert(html)
        available_images = build_image_map(slug)
        body, warnings = remap_ghost_urls(body, slug, available_images)
        if warnings:
            all_warnings.append((slug, warnings))

        frontmatter = build_frontmatter(post)
        content = frontmatter + "\n\n" + clean_markdown(body)

        (OUTPUT_DIR / filename).write_text(content)
        stats["written"] += 1
        print(f"  OK: {filename}")

    print(f"\nDone: {stats['written']} written, "
          f"{stats['skipped_no_html']} skipped (no html), "
          f"{stats['skipped_draft']} skipped (draft)")

    if all_warnings:
        print("\nWarnings:")
        for slug, warns in all_warnings:
            print(f"  {slug}:")
            for w in warns:
                print(f"    {w}")


if __name__ == "__main__":
    extract_posts()
