module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/es6',
    'ryansobol/react'
  ],

  parserOptions: {
    sourceType: 'module'
  },

  'rules': {
        'no-tabs': 'off',
        'react/jsx-indent': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'max-len': 'off',
        'indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/self-closing-comp': 'off',
        'react/jsx-sort-props': 'off',
        'react/jsx-handler-names': 'off'
    }
};
