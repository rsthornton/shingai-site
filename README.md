# shingai.xyz

Personal site for Shingai Thornton. Astro 5 + Tailwind 4.

## URLs

- **Production**: https://deft-squirrel-462088.netlify.app/ (pending custom domain)
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
├── content/archive/    # 36 published posts (from Ghost export)
├── layouts/            # BaseLayout.astro
├── pages/
│   ├── index.astro     # Home
│   ├── about.astro     # About
│   └── archive/        # Archive index + post template
└── styles/global.css   # Tailwind + prose styles
```

## Archive Posts

Posts transformed from Ghost export using `transform_posts.py`:
- Source: `halcyonic-projects/archive/shingai-ghost-export/published/`
- Frontmatter: `title`, `permalink`, `date`, `updated` (optional)

**Current behavior**: Archive links redirect to `shingai.xyz/[permalink]/` (Ghost site) to preserve embeds and images.

To switch to local rendering, edit `src/pages/archive/index.astro`:
```diff
- href={`https://shingai.xyz/${post.data.permalink}/`}
+ href={`/archive/${post.data.permalink}`}
```

## Deployment

Auto-deploys via Netlify on push to `main`. Config in `netlify.toml`.

## TODO

- [ ] Add custom domain (shingai.xyz) in Netlify
- [ ] Migrate content locally (handle embeds/images)
- [ ] Cancel Ghost Pro after DNS cutover
