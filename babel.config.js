module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        alias: {
          '@common': './app/views/@common',
          '@core-components': './core/components',
          '@core-constants': './core/constants',
          '@core-styles': './core/styles'
        }
      }
    ]
  ]
}
