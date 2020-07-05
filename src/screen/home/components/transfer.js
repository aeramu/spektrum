import React from 'react'
import {
    View, 
    TextInput, 
    Button, 
    Text
} from 'react-native'
import {gql} from 'apollo-boost'
import {useMutation} from '@apollo/react-hooks'

export default () => {
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
        <View>
            <Text>Transfer</Text>
            <TextInput placeholder='NIM' onChangeText={(text) => setNIM(text)}/>
            <TextInput placeholder='Amount' onChangeText={(text) => setMoney(text)}/>
            <Button title='transfer' onPress={() => handleTransfer()}/>
        </View>
    )
}

const TRANSFER = gql`
    mutation($nim: String!, $money: Int!){
        transfer(receiverNIM: $nim, money: $money){
            id
            money
        }
    }
`