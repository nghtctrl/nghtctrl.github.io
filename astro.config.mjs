// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { SITE_CONFIG } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: SITE_CONFIG.siteUrl,
  integrations: [
    react(),
    mdx(),
    icon(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
