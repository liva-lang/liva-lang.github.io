// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { createHighlighter } from 'shiki';
import fs from 'node:fs';

const livaGrammar = JSON.parse(
  fs.readFileSync('./src/grammars/liva.tmLanguage.json', 'utf-8')
);

// https://astro.build/config
export default defineConfig({
  site: 'https://liva-lang.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      langs: [livaGrammar],
      theme: 'github-dark',
    }
  }
});