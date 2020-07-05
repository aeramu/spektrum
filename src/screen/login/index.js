import React from 'react'
import {
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Button, 
} from 'react-native'
import {AuthContext} from '../../context'
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
            <Text>login</Text>
            <TextInput style={styles.input} onChangeText={(text) => setNIM(text)}/>
            <TextInput style={styles.input} onChangeText={(text) => setCode(text)}/>
            <Button title='Login' onPress={() => handleSignIn()}/>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      borderWidth:1,
  }
})