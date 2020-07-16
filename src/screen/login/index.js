import React from 'react'
import {
    Image,
    View,
    StyleSheet,
} from 'react-native'
import {Form} from './components'
import logo from '../../../assets/logo.png'

export default () => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.logo} 
                source={logo}
            />
            <Form/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
      width:500,
      height:200,
    },
    container:{
        alignItems:'center',
        padding:20,
    }
})