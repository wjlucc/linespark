import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://wjlucc.github.io/linespark',
  base: '/linespark',
  integrations: [mdx()],
});