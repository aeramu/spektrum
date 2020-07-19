import React from 'react'
import {
    FlatList,
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default ({data}) => {
    return(
        <FlatList
            data={data}
            renderItem={({item}) => {
                const type = item.item? "buy" : "transfer to"
                const target = item.item? item.item : item.destination
                return(
                    <RenderItem source={item.source} type={type} target={target} amount={item.amount}/> 
                )
            }}
        />
    )
}

const RenderItem = ({source, type, target, amount}) => {
    return(
        <View style={styles.itemContainer}>
            <Text>{source + ' ' + type + ' ' + target + ' Rp.' + amount}</Text>
            {/* <Text style={styles.number}>{source}</Text>
            <Text style={styles.nim}>{type}</Text>
            <Text style={styles.name}>{target}</Text>
            <Text style={styles.money}>{amount}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        marginBottom:10,
    },
})