module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [ 'react', 'jsx-a11y', 'import', 'flowtype-errors' ],
  rules: {
    'flowtype-errors/show-errors': 2,
    'react/jsx-filename-extension': 0,
    'no-unused-expressions': 0,
    'react/prefer-stateless-function': 0,
    'no-confusing-arrow': 0,
  },
};
