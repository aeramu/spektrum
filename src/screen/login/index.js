import React from 'react'
import {
    Image,
    View,
    StyleSheet,
} from 'react-native'
import {Form} from './components'

export default () => {
    return (
        <View style={styles.container}>
            {/* <Image
                style={{ width: 100, height: 100 }}
                resizeMode='contain'
                //style={styles.logo} 
                source={require('./logo.png')}
            /> */}
            <Form/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
      flex: 1,
      width:100,
      height:100,
    },
    container:{
        alignItems:'center',
        paddingTop:200,
    }
})