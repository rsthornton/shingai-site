# shingai.xyz

Personal site for Shingai Thornton. Astro 5, plain CSS, no framework.

- **Production**: https://shingai.xyz (GitHub Pages)
- **GitHub**: https://github.com/rsthornton/shingai-site

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serves dist/
```

## Layout

- **Header**: name, then Projects, Writing (menu: Ideas, System Explorers, Essays, Thesis), About, and X and GitHub icons. On phones (600px and under) the name sits above the nav.
- **Home**: "Hi, I'm Shingai.", the theory of change, the portrait, then "Working on": the featured projects side by side.
- **Projects** (`/projects`): every project not featured on home.
- **About**: who Shingai is, links to the CV and to book 20 minutes, and the talks.
- **IM window**: on home only, bottom right; the one way to send a message, and it holds the away message. Open by default at 900px and wider until the visitor closes it once.

## Structure

```
src/
├── content/archive/       # 32 essays, 2019–2023 (from the Ghost export)
├── data/
│   ├── site.ts            # all copy: theory of change, projects, talks, links, away message
│   └── ccs-2026-abstract.json
├── layouts/BaseLayout.astro   # head, OG tags, header, footer, dev-only background picker
├── pages/
│   ├── index.astro        # home and the IM window
│   ├── projects.astro
│   ├── about.astro
│   ├── cv.astro
│   ├── archive/           # essay index + post template
│   └── talks/             # one page per talk
└── styles/global.css      # color tokens, header, footer, prose styles
public/
├── images/icon/           # headshot and IM icons
├── images/top8/           # project screenshots, 480×300
└── talks/                 # slide PDFs
```

## Editing

Most changes are one edit to `src/data/site.ts`.

| To | Do |
|---|---|
| Change the home paragraph | edit `lede`. Wrap a word in `[brackets]` to highlight it; two or three |
| Change the home layout | set `home` to `'a'`, `'b'` or `'c'`. In dev, `/options/a`, `/b` and `/c` preview each; `claim` is the big line on A |
| Feature a project on home | `featured: true` and a one-line `blurb` on its `top8` entry. Give it a one-word `kind` too. Three fit side by side |
| Add a project | add to `top8` with a 480×300 screenshot at `public/images/top8/<img>.jpg`. An optional `talk` adds a "Talk: …" link under it |
| Update the away message | `now` lines, and bump `updated` (it shows as "set …" in the IM window) |
| Add a talk | add to `talks` (newest first, `status: 'upcoming' \| 'given'`). For a talk page, copy `src/pages/talks/ccs-2026.astro` and put slides in `public/talks/` |
| Change links | `links` (X, GitHub), `callUrl` (Book 20 minutes, on About), `email`, `thesisUrl` (ProQuest), `explorersUrl` |

Dev-only tools, absent from the build: the background picker (white, gray, fog, sage; also `?theme=`) and the theory-of-change picker on home.

Email: the IM window never relies on a mail app alone. It offers Gmail, Outlook, the mail app, or copy, and remembers the last choice (`im:via`).

## Style rules

White page, one navy accent, one highlight color. Source Serif 4 for headings, IBM Plex Sans for reading, Plex Mono only in the IM window and small counters. Borders only where a box means something (the IM window, project screenshots, menus). Corners 8px for boxes, 4px inside them. No shadows, no beige. Colors come from the tokens in `global.css`.

## Archive import

`transform_posts.py` and `re_extract.py` converted the Ghost export (`halcyonic-projects/archive/shingai-ghost-export/published/`) into `src/content/archive/`. Frontmatter: `title`, `permalink`, `date`, optional `updated` and `description`.

## Deployment

Pushing to `main` builds and deploys through `.github/workflows/deploy.yml` to GitHub Pages; the custom domain is in `public/CNAME`. `.gitignore` excludes `*.json` except package files and `src/data/*.json`.
