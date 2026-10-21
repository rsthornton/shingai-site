# shingai.xyz

Personal site for Shingai Thornton. Astro 5, no CSS framework.

- **Production**: https://shingai.xyz (GitHub Pages)
- **GitHub**: https://github.com/rsthornton/shingai-site

## Development

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
```

## Structure

```
src/
├── components/Win.astro   # AIM-style window: minimize, maximize, close, taskbar
├── content/archive/       # 32 essays, 2019–2023 (from Ghost export)
├── data/site.ts           # all copy: headline, top projects, talks, contact, icons
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro        # home
│   ├── cv.astro
│   ├── about.astro        # redirects to /
│   ├── archive/           # archive index + post template
│   └── talks/             # one page per talk
└── styles/global.css      # design tokens + prose
public/
├── images/icon/           # profile and IM icons (switch with profileIcon in site.ts)
├── images/top8/           # project screenshots
└── talks/                 # slide PDFs
```

Most edits are to `src/data/site.ts`.

## Deployment

Pushing to `main` builds and deploys through `.github/workflows/deploy.yml` to GitHub Pages (custom domain in `public/CNAME`).
