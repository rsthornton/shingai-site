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

## Structure

```
src/
├── components/Win.astro   # AIM-style window: minimize, maximize, close, taskbar
├── content/archive/       # 32 essays, 2019–2023 (from the Ghost export)
├── data/
│   ├── site.ts            # all copy: headline, top projects, talks, contact, icons
│   └── ccs-2026-abstract.json
├── layouts/BaseLayout.astro   # head, OG tags, nav strip, window frame for subpages
├── pages/
│   ├── index.astro        # home
│   ├── cv.astro
│   ├── about.astro        # redirects to /
│   ├── archive/           # archive index + post template
│   └── talks/             # one page per talk
└── styles/global.css      # design tokens + prose styles
public/
├── images/icon/           # profile and IM icons
├── images/top8/           # project screenshots, 480×300
└── talks/                 # slide PDFs
```

## Editing

Most changes are one edit to `src/data/site.ts`.

| To | Do |
|---|---|
| Update the away message | `now` lines, and bump `updated` (it shows as "set …" and "last online") |
| Add or remove a top project | add to `top8`, with a 480×300 screenshot in `public/images/top8/<img>.jpg`. The heading counts itself ("top 6") |
| Add a talk | add to `talks` (newest first, `status: 'upcoming' \| 'given'`). For a talk page, copy `src/pages/talks/ccs-2026.astro`, and put slides in `public/talks/` |
| Swap the profile photo | `profileIcon: 'headshot' \| 'kid'`; the other one shows in the IM window |
| Change contact routes | `email`, `callUrl`, `links`, `meet` |
| Change badges | the `badges` list at the top of `src/pages/index.astro` |

Windows: wrap a panel in `<Win id="…" title="…">`. Pass `closable={false}` to hide the close button. A window's minimized or closed state is kept per visitor in localStorage (`win:<id>`). Any page that passes `window="…"` to `BaseLayout` is framed in a single window.

Email: the IM window never relies on a mail app alone. It offers Gmail, Outlook, the mail app, or copy, and remembers the last choice (`im:via`).

Style rules: light mode only; IBM Plex Sans for reading text and Plex Mono for chrome; lowercase labels; colors come from the tokens in `global.css`.

## Archive import

`transform_posts.py` and `re_extract.py` converted the Ghost export (`halcyonic-projects/archive/shingai-ghost-export/published/`) into `src/content/archive/`. Frontmatter: `title`, `permalink`, `date`, optional `updated` and `description`.

## Deployment

Pushing to `main` builds and deploys through `.github/workflows/deploy.yml` to GitHub Pages; the custom domain is in `public/CNAME`. `.gitignore` excludes `*.json` except package files and `src/data/*.json`.
