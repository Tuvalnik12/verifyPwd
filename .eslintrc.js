module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  globals: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    camelcase: 0,
    radix: 0,
    'max-len': [
      2,
      { code: 200 },
    ],
  },
  root: true,
};
