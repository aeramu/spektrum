import React from 'react'
import {
    View, 
    ActivityIndicator,
    Text,
    Button,
    StyleSheet,
} from 'react-native'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'
import {AuthContext} from '../../../context'

export default (props) => {
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
    
    if (!data.myAccount) {
        handleSignOut()
    }

    return(
        <View {...props}>
            <Text style={styles.money}>Rp. {data.myAccount.money}</Text>
            <Text style={styles.text}>{data.myAccount.nim}</Text>
            <Text style={styles.text}>{data.myAccount.name}</Text>
            <View style={styles.button}>
                <Button title='logout' onPress={() => handleSignOut()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    money:{
        fontWeight:'bold',
        fontSize:30,
        marginBottom:10,
    },
    button:{
        marginTop:10,
        borderRadius:10,
        overflow:'hidden'
    },
    text:{
        fontSize:16,
    }
})

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