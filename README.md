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
- **Home**: one big line ("Systems theorist and builder."), the theory of change under it once there is one, then "Working on": three featured projects side by side.
- **Projects** (`/projects`): every project, featured ones first.
- **About**: who Shingai is, the headshot, links to the CV and to book 20 minutes, and the talks.
- **IM window**: on home only, bottom right; the one way to send a message, and it holds the away message. It starts closed; the tab opens it.

## Structure

```
src/
├── content/archive/       # 32 essays, 2019–2023 (from the Ghost export)
├── data/
│   ├── site.ts            # all copy: the big line, theory of change, projects, talks, links, away message
│   └── ccs-2026-abstract.json
├── components/Im.astro    # the IM window
├── layouts/BaseLayout.astro   # head, OG tags, header, footer, dev-only background picker
├── pages/
│   ├── index.astro        # home
│   ├── projects.astro
│   ├── about.astro
│   ├── cv.astro
│   ├── archive/           # essay index + post template
│   └── talks/             # one page per talk
└── styles/global.css      # color tokens, header, footer, prose styles
public/
├── images/icon/           # headshot and IM icons
├── images/top8/           # project screenshots, 960×600
└── talks/                 # slide PDFs
```

## Editing

Most changes are one edit to `src/data/site.ts`.

| To | Do |
|---|---|
| Change the big line on home | edit `claim` |
| Add the theory of change | write it in `theory` (empty for now, so nothing shows). It appears under the big line. Wrap a word in `[brackets]` to highlight it; two or three |
| Feature a project on home | `featured: true` and a one-line `blurb` on its `top8` entry. Give it a one-word `kind` too. Three fit side by side |
| Add a project | add to `top8` with a 960×600 screenshot at `public/images/top8/<img>.jpg`. An optional `talk` adds a "Talk: …" link under it |
| Update the away message | `now` lines, and bump `updated` (it shows as "set …" in the IM window) |
| Add a talk | add to `talks` (newest first, `status: 'upcoming' \| 'given'`). For a talk page, copy `src/pages/talks/ccs-2026.astro` and put slides in `public/talks/` |
| Change links | `links` (X, GitHub), `callUrl` (Book 20 minutes, on About), `email`, `thesisUrl` (ProQuest), `explorersUrl` |

Dev-only tool, absent from the build: the background picker (white, gray, fog, sage; also `?theme=`).

## Trying a new design

There is one home page and one version of each thing. To try a different direction, make a branch, change it there, and merge it or delete it; do not keep alternatives side by side in `main`. Earlier directions stay in git history if one is wanted back: a text-only index and a profile-with-sidebar home are in commit `5416f11` (`src/components/Home.astro`), and the theory-of-change drafts are in `c45dee3` (`src/data/site.ts`).

Email: the IM window never relies on a mail app alone. It offers Gmail, Outlook, the mail app, or copy, and remembers the last choice (`im:via`).

## Style rules

White page, one navy accent, one highlight color. Source Serif 4 for headings, IBM Plex Sans for reading, Plex Mono only in the IM window and small counters. Borders only where a box means something (the IM window, project screenshots, menus). Corners 8px for boxes, 4px inside them. No shadows, no beige. Colors come from the tokens in `global.css`.

## Archive import

`transform_posts.py` and `re_extract.py` converted the Ghost export (`halcyonic-projects/archive/shingai-ghost-export/published/`) into `src/content/archive/`. Frontmatter: `title`, `permalink`, `date`, optional `updated` and `description`.

## Deployment

Pushing to `main` builds and deploys through `.github/workflows/deploy.yml` to GitHub Pages; the custom domain is in `public/CNAME`. `.gitignore` excludes `*.json` except package files and `src/data/*.json`.
