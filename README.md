# shingai.xyz

Source for [shingai.xyz](https://shingai.xyz), the personal site of Shingai Thornton. Astro 5, plain CSS, no UI framework, no client-side JavaScript beyond a few lines.

## Run it

Node 22 (`.nvmrc`); 20 or newer works.

```bash
npm install
npm run dev       # http://localhost:4321
npm run verify    # everything CI checks: format, types, build, internal links
```

| Script | Does |
|---|---|
| `dev` | Local server with reload |
| `build` | Static site into `dist/` |
| `preview` | Serves `dist/` |
| `check` | `astro check`: TypeScript and templates |
| `check:links` | Every internal `href` and `src` in `dist/` points at a file (run after `build`) |
| `format` / `format:check` | Prettier, with the Astro plugin |
| `verify` | All of the above, in CI's order |

## Pages

| Address | Shows | File |
|---|---|---|
| `/` | Menu, a drawing, the line and an intro, as set by `look` | `src/pages/index.astro` |
| `/projects` | Projects with screenshots, then talks | `src/pages/projects.astro` |
| `/writing` | Essays and blyg field notes in one list, with tabs | `src/pages/writing.astro` |
| `/archive/<slug>` | One essay | `src/pages/archive/[slug].astro` |
| `/about` | Bio, photo, CV and call links | `src/pages/about.astro` |
| `/cv` | The CV | `src/pages/cv.astro` |
| `/talks/ccs-2026` | A talk with its abstract and materials | `src/pages/talks/ccs-2026.astro` |
| `/rss.xml` | RSS for everything on `/writing` | `src/pages/rss.xml.ts` |
| `/archive` | Redirects to `/writing` | `astro.config.mjs` |
| anything else | Not found | `src/pages/404.astro` |
| `/lab` | The drawing library (dev mode only, never built) | `src/lab/Library.astro` |

## Where things live

```
src/
├── data/
│   ├── site.ts        # name, the line, who, portrait, email, every outside URL (urls), and `look`
│   ├── projects.ts    # the projects, typed, in display order
│   ├── talks.ts       # the talks, typed, newest first
│   ├── writing.ts     # builds the writing list: essays + blyg notes (+ talks if asked)
│   └── ccs-2026-abstract.json
├── content/archive/   # 32 essays, 2019–2023, markdown (schema in src/content/config.ts)
├── art/               # the drawing library: registry.ts (ids, notes, picks), one .astro per lineage,
│                      #   Drawing.astro (draws one by id), geom.ts (arrows, arcs, gears), art.css (color roles)
├── lab/               # dev mode only: LabBar.astro (the toolbar) and Library.astro (/lab)
├── components/
│   ├── HomeArt.astro  # the first three drawings (one-color), kept in the library
│   └── Icons.astro    # X, GitHub, email, RSS icons
├── layouts/BaseLayout.astro   # head and social tags, header menu, <main>, footer
├── pages/             # one file per address (table above)
└── styles/global.css  # color tokens, header, footer, prose
public/
├── images/projects/   # project screenshots, 960×600
├── images/icon/       # headshot (photo and pixel)
├── images/archive/    # images inside the essays
└── talks/             # slide PDFs
scripts/
├── check-links.mjs    # the internal link check
└── ghost-import/      # one-off scripts that imported the essays from Ghost (not part of the build)
```

### How writing works

`/writing` is a hub: it lists writing that lives in different places. Essays are markdown files in this repo. Field notes live on the blyg ([blyg.shingai.xyz](https://blyg.shingai.xyz)) and are read from its RSS feed when the site builds; if the blyg can't be reached, the build carries on without them. The site deploys daily, so a new blyg entry appears within a day without a commit. The newsletter (Ideas) and the thesis are linked, not listed.

## Editing

| To | Do |
|---|---|
| Change the line or the who sentence | `claim` and `who` in `src/data/site.ts` |
| Add the theory of change | `theory` in `site.ts`; it shows under the who sentence on home when not empty |
| Add a project | an entry in `src/data/projects.ts`, and a 960×600 screenshot at `public/images/projects/<img>.jpg` |
| Add a talk | an entry at the top of `src/data/talks.ts`. For a page of its own, copy `src/pages/talks/ccs-2026.astro` and put slides in `public/talks/` |
| Add an essay | a markdown file in `src/content/archive/` with `title`, `permalink` and `date` |
| Change a link | `urls` in `site.ts` |
| Change the drawing, colors or intro | `look` in `src/data/site.ts`; try options first in dev mode (below) |
| Add a drawing | an entry in `src/art/registry.ts` and its SVG in the lineage's `.astro` file (320×240 frame, color classes from `art.css`) |
| Mark a pick | `rank: 'favorite'` or `'shortlist'` on its registry entry; the toolbar shows the shortlist by default |
| Mark a release | bump `updated` in `site.ts` (shown in the footer) |

## Dev mode

`npm run dev` turns on a design lab that production never contains (the build checks `import.meta.env.DEV`).

- **Toolbar** at the bottom of every page, marked *dev*: the drawing (‹ › or the arrow keys, through the shortlist or the whole library), the color palette (navy, frost, teal, plum), the drawing in color or one color, the heading color, and the intro. Choices are kept in the browser, so every page follows them; *reset* goes back to `look`.
- **Library** at [`/lab`](http://localhost:4321/lab): every drawing, picks first, each with where its idea comes from. Click one to open it on home.
- **Making a choice permanent:** *copy look* puts a `look = { … }` line on the clipboard; paste it over `look` in `src/data/site.ts`. Production renders exactly `look` and only the chosen drawing.

Dev mode is for trying things. Anything kept goes into `look`, the registry or the CSS tokens, and through `npm run verify` like any other change.

## Style rules

Light only. Pale gray-blue page (`--page`), white boxes, one accent and one highlight color (navy unless `look` picks another palette), with Frost and Aurora tokens for color in drawings and labels; every color is a token in `global.css`. Drawings use color roles (matter blue, energy orange, messages green), not ad hoc colors. Source Serif 4 for headings, IBM Plex Sans for reading, Plex Mono only for small machine bits (dates, kinds). Borders only where a box means something (project screenshots). Corners 8px for boxes, 4px inside them. No shadows, no beige. Motion only where it says something, and never when the reader asks for reduced motion.

## Accessibility

A skip link, one `<main>` per page, `aria-current` on the menu, visible focus rings, decorative images and drawings hidden from screen readers, and one link per project card. The writing tabs are radio buttons, so they work from the keyboard without script.

## Deployment

Pushing to `main` builds, checks links and deploys to GitHub Pages (`.github/workflows/deploy.yml`), and the same workflow runs daily. The custom domain is in `public/CNAME`. Pull requests run `npm run verify` (`.github/workflows/ci.yml`). Dependabot opens monthly update pull requests. Ghost exports (`*.ghost.*.json`) are ignored and never committed.

## History

Earlier directions are in git, not side by side in `main`: the IM window and the Writing dropdown are in the history before the restructure commit (`git log -- src/components/Im.astro`), and the design explorations that led here were the `explore/*` branches. The drawing library replaced the one-off toggles those branches used.

## License

The code is MIT. The content (essays, images, slides, the talk abstract) is © Shingai Thornton, all rights reserved. Details and the exact paths in [`LICENSE.md`](./LICENSE.md).

## Contributing

It's Shingai's personal site, so changes come from him, but issues are welcome: a broken link, a typo, something unreadable on your screen.
