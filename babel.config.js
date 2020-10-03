module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          'sodium-native': 'sodium-javascript',
          'sodium-universal': 'sodium-javascript',
          stream: 'readable-stream'
        }
      }]
    ],
    presets: ['babel-preset-expo']
  }
}
