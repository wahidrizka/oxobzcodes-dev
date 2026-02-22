import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**'],
  },
];