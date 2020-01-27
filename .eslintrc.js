module.exports = {
  env: {
    jest: true,
    browser: true
  },
  plugins: ['import'],
  extends: ['@react-native-community'],
  rules: {
    // your custom rules here
    semi: 0,
    'no-console': 1,
    'comma-dangle': 0, //['error', 'never']
    'max-len': [
      2,
     {
       code: 120,
       tabWidth: 4,
       ignoreUrls: true,
       ignoreStrings: true,
       ignoreTemplateLiterals: true,
       ignoreRegExpLiterals: true
     }
   ],
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        semi: false,
        jsxBracketSameLine: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '@common': './app/views/@common',
          '@components': './core/components'
        }
      },
      node: {
        extensions: ['.js', '.ios.js', '.android.js']
      }
    },
    'import/ignore': ['react-navigation'] // eslint-plugin-import/issues/1381
  }
}

/*
     'max-len': [
       2,
      {
        code: 120,
        tabWidth: 4,
        ignoreUrls: true,
        ignoreString: true,
        ignoreTempleLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-bracket-location': 0,
    'no-unused-vars': 1,
    'no-var': 1,
    'vars-on-top': 1,
    'no-bitwise': 1,
    'no-underscore-dangle': 0,
    'react/destructuring-assignment': 0
*/
