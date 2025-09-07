import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// TODO: 将 site 设置为你的站点地址（用于 RSS/Sitemap 等功能）。示例：
// site: 'https://<your-username>.github.io/linespark'
export default defineConfig({
  integrations: [mdx()],
});