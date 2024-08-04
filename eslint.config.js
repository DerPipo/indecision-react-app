// @ts-check

import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    name: 'exclude vite build output',
    ignores: ['dist'],
  },
  {
    name: 'eslint/recommended',
    ...eslint.configs.recommended,
  },
  ...tseslint.configs.recommended,
  {
    name: 'react/recommended',
    files: ['**/*.jsx', '**/*.tsx'],
    ...react.configs.flat.recommended,
  },
  {
    name: 'react/jsx-runtime',
    files: ['**/*.jsx', '**/*.tsx'],
    ...react.configs.flat['jsx-runtime'],
  },
  {
    name: 'react-hooks/recommended',
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
    },
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  {
    name: 'react-refresh/only-export-components',
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },
  },
  {
    name: 'add-browser-globals',
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        thisDoesntExist: 'writable',
      },
      parser: tsParser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    name: 'prettier',
    ...eslintConfigPrettier,
  }
);
