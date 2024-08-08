import globals from 'globals'
import { ESLint } from 'eslint'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'

const eslint = new ESLint({
  overrideConfig: {
    env: {
      browser: true,
      es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      js: pluginJs,
      react: pluginReact,
      '@typescript-eslint': tseslint,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      '@typescript-eslint/recommended',
      'prettier',
      'prettier/@typescript-eslint',
    ],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
    globals: globals.browser,
  },
})

export default eslint
