import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Button, 
} from 'react-native'
import {AuthContext} from '../../../context'
import {useMutation} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

export default () => {
    const [nim, setNIM] = React.useState()
    const [code, setCode] = React.useState()
    const {setToken} = React.useContext(AuthContext)
    const [signIn] = useMutation(SIGN_IN)

    const handleSignIn = () => {
        signIn({
            variables:{
                nim,
                code,
            }
        })
        .then(({data}) => {
            setToken(data.signIn)
        })
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='NIM' 
                onChangeText={(text) => setNIM(text)}
            />
            <TextInput 
                style={styles.input}
                placeholder='Code' 
                onChangeText={(text) => setCode(text)}
            />
            <View style={styles.button}>
                <Button
                    style={styles.button} 
                    title='       Login       ' 
                    onPress={() => handleSignIn()}
                />
            </View>
        </View>
    )
}

const SIGN_IN = gql`
    mutation($nim: String!, $code: String!){
        signIn(nim: $nim, code: $code)
    }
`

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth:0.1,
        borderColor:'grey',
        marginBottom:10,
        padding:10,
        overflow:'hidden',
        borderRadius:10,
    },
    button:{
        marginTop:10,
        borderRadius:10,
        overflow:'hidden'
    }
})