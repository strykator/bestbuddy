module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        alias: {
          '@common': './app/views/@common',
          '@components': './core/components'
        }
      }
    ]
  ]
}
