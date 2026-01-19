#!/usr/bin/env python3
"""Transform Ghost exported posts to Astro content collection format.

Transforms:
- Rename 'created' → 'date'
- Remove ghost_id, char_count, status (not needed for display)
- Copy to src/content/archive/
"""

import re
import shutil
from pathlib import Path

SOURCE_DIR = Path("/Users/home/Desktop/halcyonic-projects/archive/shingai-ghost-export/published")
TARGET_DIR = Path(__file__).parent / "src" / "content" / "archive"


def transform_frontmatter(content: str) -> str:
    """Transform frontmatter from Ghost format to Astro format."""
    # Split frontmatter from content
    if not content.startswith("---"):
        return content

    parts = content.split("---", 2)
    if len(parts) < 3:
        return content

    frontmatter = parts[1]
    body = parts[2]

    # Transform frontmatter
    lines = frontmatter.strip().split("\n")
    new_lines = []

    for line in lines:
        # Rename created → date
        if line.startswith("created:"):
            new_lines.append(line.replace("created:", "date:"))
        # Rename slug to permalink and quote to ensure string parsing
        elif line.startswith("slug:"):
            slug_value = line.split(":", 1)[1].strip()
            # Remove existing quotes if any
            slug_value = slug_value.strip('"').strip("'")
            new_lines.append(f'permalink: "{slug_value}"')
        # Keep title, updated
        elif line.startswith(("title:", "updated:")):
            new_lines.append(line)
        # Skip ghost_id, char_count, status
        elif line.startswith(("ghost_id:", "char_count:", "status:")):
            continue
        else:
            new_lines.append(line)

    new_frontmatter = "\n".join(new_lines)
    return f"---\n{new_frontmatter}\n---{body}"


def main():
    # Ensure target directory exists
    TARGET_DIR.mkdir(parents=True, exist_ok=True)

    # Process all published posts
    posts = list(SOURCE_DIR.glob("*.md"))
    print(f"Found {len(posts)} published posts")

    for post_path in sorted(posts):
        content = post_path.read_text()
        transformed = transform_frontmatter(content)

        # Use same filename
        target_path = TARGET_DIR / post_path.name
        target_path.write_text(transformed)
        print(f"  Transformed: {post_path.name}")

    print(f"\nDone! {len(posts)} posts copied to {TARGET_DIR}")


if __name__ == "__main__":
    main()
