import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import hypercore from 'hypercore'
import RAM from 'random-access-memory'
import HyperswarmClient from 'hyperswarm-proxy-ws/client'

const DEFAULT_PROXY_SERVER = 'wss://hyperswarm.mauve.moe'

export default function App () {
  const [url, setURL] = useState('')

  useEffect(() => {
    const client = new HyperswarmClient({
      proxy: DEFAULT_PROXY_SERVER
    })
    const core = hypercore(RAM)

    client.on('connection', (connection) => {
      connection.pipe(core.replicate(true)).pipe(connection)
    })

    core.ready(() => {
      console.log('Ready!')

      const coreURL = `hyper://${core.key.toString('hex')}/`

      client.join(core.discoveryKey)

      setURL(coreURL)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>
      Hypercore URL is currently:
      </Text>
      <Text>
        {url}
      </Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
