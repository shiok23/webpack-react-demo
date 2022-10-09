module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  globals: {
    __wxConfig: true,
    wx: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    getApp: true,
    getCurrentPages: true
  },
  extends: [
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'eqeqeq': 'off',
    'prefer-const': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'radix': 'off',
    'consistent-return': 'off',
    'prefer-destructuring': 'off',
    'no-multi-assign': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'no-bitwise': [
      'error',
      {
        'allow': ['~'],
        'int32Hint': true
      }
    ],
    'prefer-promise-reject-errors': 'off',
    'func-names': 'off',
    'no-continue': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'no-console': process.env.NODE_ENV === 'prod' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'error' : 'off',
    'camelcase': 'off',
    'no-useless-escape': 'off',
    'import/named': 'warn',
    'no-restricted-properties': 'off',
    'no-nested-ternary': 'warn',
    'no-sequences': 'warn'
  }
}
