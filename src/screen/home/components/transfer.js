import React from 'react'
import {
    View, 
    TextInput, 
    Button, 
    Text,
    StyleSheet
} from 'react-native'
import {gql} from 'apollo-boost'
import {useMutation} from '@apollo/react-hooks'

export default (props) => {
    const [nim, setNIM] = React.useState()
    const [money, setMoney] = React.useState()
    const [transfer] = useMutation(TRANSFER)

    const handleTransfer = () => {
        transfer({
            variables:{
                nim,
                money: parseInt(money)
            }
        })
    }

    return(
        <View {...props}>
            <Text style={styles.title}>Transfer</Text>
            <TextInput 
                style={styles.input}
                placeholder='NIM' 
                onChangeText={(text) => setNIM(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Amount' 
                onChangeText={(text) => setMoney(text)}
            />
            <View style={styles.button}>
                <Button title='transfer' onPress={() => handleTransfer()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:10,
        borderRadius:10,
        overflow:'hidden'
    },
    input: {
        borderWidth:0.1,
        borderColor:'grey',
        marginBottom:10,
        padding:10,
        overflow:'hidden',
        borderRadius:10,
    },
    title:{
        fontSize:20,
        marginBottom:10,
    }
})

const TRANSFER = gql`
    mutation($nim: String!, $money: Int!){
        transfer(receiverNIM: $nim, money: $money){
            id
            money
        }
    }
`