module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        alias: {
          '@views': './app/views',
          '@hooks': './app/hooks',
          '@core-components': './core/components',
          '@core-constants': './core/constants',
          '@core-hooks': './core/hooks',
          '@core-styles': './core/styles',
          '@core-utils': './core/utils'
        }
      }
    ]
  ]
}
