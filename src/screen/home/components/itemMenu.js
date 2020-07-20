import React from 'react'
import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet,
} from 'react-native'
import ItemList from './itemList'
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
            <Text style={styles.title}>Menu</Text>
            <View style={styles.divider}/>
            <ItemList data={data.itemList.edges}/>
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
        itemList{
            edges{
                id
                name
                description
                price
            }
        }
    }
`