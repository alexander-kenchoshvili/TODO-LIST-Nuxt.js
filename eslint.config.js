import prettierPlugin from 'eslint-plugin-prettier';
import vuePlugin from 'eslint-plugin-vue';

export default [
  {
    ignores: ['node_modules', 'dist', '.nuxt'],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier: prettierPlugin,
      vue: vuePlugin,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': 'error',
    },
  },
];
