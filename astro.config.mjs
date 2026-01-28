// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import node from '@apphosting/astro-adapter';

// https://astro.build/config
export default defineConfig({
  site: 'https://kangwamukuka.web.app',
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});