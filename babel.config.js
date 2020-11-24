module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      [
        'babel-plugin-rewrite-require',
        {
          aliases: {
            'sodium-native': 'sodium-javascript',
            'sodium-universal': 'sodium-javascript',
            stream: 'readable-stream',
            hyperswarm: 'hyperswarm-web',
            crypto: 'get-random-values-polypony',
            worker_threads: './worker-threads-shim.js'
          }
        }
      ]
    ],
    presets: ['babel-preset-expo']
  }
}
