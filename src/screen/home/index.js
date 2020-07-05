import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import {Transfer, Scoreboard, Wallet} from './components'

export default () => {
  return (
    <View style={styles.container}>
      <Wallet/>
      <Transfer/>
      <Scoreboard/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})