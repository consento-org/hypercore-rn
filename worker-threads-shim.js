module.exports = {
  MessageChannel: function () {
    return {
      port1: {
        postMessage: () => null
      }
    }
  }
}
