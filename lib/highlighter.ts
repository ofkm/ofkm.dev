import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import { createHighlighterCore } from 'shiki/core';

const bundledLanguages = {
  bash: () => import('@shikijs/langs/bash'),
  diff: () => import('@shikijs/langs/diff'),
  javascript: () => import('@shikijs/langs/javascript'),
  json: () => import('@shikijs/langs/json'),
  svelte: () => import('@shikijs/langs/svelte'),
  typescript: () => import('@shikijs/langs/typescript'),
  tsx: () => import('@shikijs/langs/tsx'),
  jsx: () => import('@shikijs/langs/jsx'),
};

export type SupportedLanguage = keyof typeof bundledLanguages;

export const highlighter = createHighlighterCore({
  themes: [import('@shikijs/themes/github-light-default'), import('@shikijs/themes/github-dark-default'), import('@shikijs/themes/catppuccin-mocha')],
  langs: Object.entries(bundledLanguages).map(([_, lang]) => lang),
  engine: createJavaScriptRegexEngine(),
});
