import React from 'react'
import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet,
} from 'react-native'
import TransactionList from './transactionList'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

export default (props) => {
    const {data, loading, refetch} = useQuery(TRANSACTION)

    if (loading) return (
        <View>
            <ActivityIndicator/>
        </View>
    )

    return(
        <View {...props}>
            <Text style={styles.title}>Transaction History</Text>
            <View style={styles.divider}/>
            <TransactionList data={data.transactionList.edges}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    divider:{
        height:1,
        alignSelf:'stretch',
        backgroundColor:'grey',
        marginBottom:20,
    },
})

const TRANSACTION = gql`
    {
        transactionList{
            edges{
                id
                source
                destination
                item
                amount
            }
        }
    }
`