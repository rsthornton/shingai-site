import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shingai.xyz',
  // The essay index became /writing; old links to /archive still land.
  redirects: { '/archive': '/writing' },
});
