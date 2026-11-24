import { defineConfig } from 'astro/config';

// Dev mode: the drawing library at /lab exists only under `npm run dev`, never in the built site.
const devLab = {
  name: 'dev-lab',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command === 'dev') injectRoute({ pattern: '/lab', entrypoint: './src/lab/Library.astro' });
    },
  },
};

export default defineConfig({
  site: 'https://shingai.xyz',
  integrations: [devLab],
  // The essay index became /writing; old links to /archive still land.
  redirects: { '/archive': '/writing' },
});
