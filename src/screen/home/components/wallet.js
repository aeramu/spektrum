import React from 'react'
import {
    View, 
    ActivityIndicator,
    Text,
    Button,
} from 'react-native'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'
import {AuthContext} from '../../../context'

export default () => {
    const {data, loading} = useQuery(WALLET)
    const {removeToken} = React.useContext(AuthContext)

    const handleSignOut = () => {
        removeToken()
    }

    if (loading) return (
        <View>
            <ActivityIndicator/>
        </View>
    )

    return(
        <View>
            <Text>{data.myAccount.nim}</Text>
            <Text>{data.myAccount.name}</Text>
            <Text>Rp. {data.myAccount.money}</Text>
            <Button title='logout' onPress={() => handleSignOut()}/>
        </View>
    )
}

const WALLET = gql`
    {
        myAccount{
            id
            nim
            name
            money
        }
    }
`