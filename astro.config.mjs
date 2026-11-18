// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import rehypeSections from './src/plugins/rehype-sections.mjs';

// Le site est publié sur GitHub Pages, dans le sous-dossier /portfolio.
// Avec un nom de domaine à soi, il suffira de changer `site` et de mettre `base: '/'`.
export default defineConfig({
  site: 'https://gabyscote.github.io',
  base: '/portfolio',
  // Le contenu des études de cas passe par un plugin maison (rehype-sections),
  // qui range texte et images en blocs côte à côte.
  markdown: { processor: unified({ rehypePlugins: [rehypeSections] }) },
  integrations: [mdx()],
  prefetch: true,
});
