import React from 'react'
import {
    StyleSheet,
    View,
    Image,
} from 'react-native'
import {Transfer, Scoreboard, Wallet, TransactionHistory, ItemMenu} from './components'
import logo from '../../../assets/logo.png'

export default () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{height:200, width: 500}} resizeMode='contain'/>
      <Wallet style={styles.wallet}/>
      <Transfer style={styles.transfer}/>
      <Scoreboard style={styles.scoreboard}/>
      <TransactionHistory style={styles.scoreboard}/>
      <ItemMenu style={styles.scoreboard}/>
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
    width:350,
    borderWidth:0.5,
    borderRadius:20,
    borderColor:'grey',
    paddingTop:30,
    paddingBottom:30,
    paddingHorizontal:50,
  },
  scoreboard:{
    width:350,
    height:500,
    alignItems:'center',
    borderWidth:0.5,
    borderRadius:20,
    borderColor:'grey',
    paddingVertical:20,
    paddingHorizontal:20,
    marginTop:20,
  },
  transfer:{
    width:350,
    alignItems:'stretch',
    borderWidth:0.5,
    borderRadius:20,
    borderColor:'grey',
    paddingVertical:20,
    paddingHorizontal:30,
    marginTop:20,
    marginBottom:20,
  },
})