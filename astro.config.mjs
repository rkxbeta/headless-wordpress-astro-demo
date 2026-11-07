import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://demo.headless-journal.local',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});

