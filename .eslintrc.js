module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/state-in-constructor': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/forbid-prop-types': 'off',
    'class-methods-use-this': 'off',
    'array-callback-return': 'off',
  },
};
