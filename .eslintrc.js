module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'semi': [2, 'always'],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'no-whitespace-before-property': 'error',
    'no-unused-vars': 'error',
    'no-multi-spaces': 'error',
    'no-console': 'warn',
    'indent': ['error', 2],
  },
};
