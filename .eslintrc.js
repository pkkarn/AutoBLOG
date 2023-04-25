module.exports = {
    root: true,
    env: {
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['vue', '@typescript-eslint'],
    rules: {
      // Add any custom rules or overrides here
    },
  }
  