/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],
    indent: ['warn', 2],
    'comma-dangle': ['warn', 'always'],
  }
};