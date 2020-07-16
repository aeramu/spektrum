import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import {Transfer, Scoreboard, Wallet} from './components'

export default () => {
  return (
    <View style={styles.container}>
      <Wallet style={styles.wallet}/>
      <Scoreboard style={styles.scoreboard}/>
      <Transfer style={styles.transfer}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical:20,
    paddingHorizontal:20,
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  wallet:{
    width:300,
    borderWidth:0.5,
    borderRadius:20,
    borderColor:'grey',
    paddingTop:30,
    paddingBottom:30,
    paddingHorizontal:50,
  },
  scoreboard:{
    width:300,
    height:200,
    borderWidth:0.5,
    borderRadius:20,
    borderColor:'grey',
    padding:20,
    marginTop:20,
  },
  transfer:{
    width:300,
    borderWidth:0.5,
    borderRadius:20,
    borderColor:'grey',
    paddingVertical:20,
    paddingHorizontal:30,
    marginTop:20,
    marginBottom:20,
  },
})