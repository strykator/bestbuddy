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
          '@components': './core/components',
          '@constants': './core/constants',
          '@styles': './core/styles'
        }
      },
      node: {
        extensions: ['.js', '.ios.js', '.android.js']
      }
    },
    'import/ignore': ['react-navigation'] // eslint-plugin-import/issues/1381
  }
}
