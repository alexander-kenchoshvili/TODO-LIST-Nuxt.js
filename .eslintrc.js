module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "prettier/prettier": "error",
  },
};
