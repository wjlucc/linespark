---
title: 用 Astro + GitHub Pages 搭建博客：从 0 到 1
date: 2025-09-08
tags: [Astro, GitHub Pages]
summary: 一步步带你用 Astro 搭建博客、配置内容集合、接入 GitHub Actions 自动部署到 GitHub Pages，并处理项目路径导致的链接 404 等细节。
---

欢迎来到我的新博客！这是一篇示例文章，用来验证：
- 内容集合 schema 的约束是否正常（date 为 Date 类型，tags 为字符串数组）。
- 列表页 /posts/ 是否能正确列出并链接到详情页。
- GitHub Pages 项目站点（/linespark/）下的 BASE_URL 路径是否正确拼接，避免 404。

小结：
- 新文章放在 src/content/posts/
- Frontmatter 格式如上；未写 slug 时，将使用文件名生成 slug：sample-post
- 访问路径将是 /posts/sample-post/

如果你看到了这篇文章并能在 GitHub Pages 上顺利打开，说明一切配置都已就绪！