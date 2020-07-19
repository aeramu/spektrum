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
            ListHeaderComponent={() => (
                <RenderItem number='No' nim='NIM' name='Name' venture='Venture' money='Money'/>
            )}
            renderItem={({item, index}) => (
                <RenderItem number={index+1} nim={item.nim} name={item.name} venture={item.venture} money={item.money}/>
            )}
        />
    )
}

const RenderItem = ({number, nim, name, money, venture}) => {
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.number}>{number + '.'}</Text>
            <Text style={styles.nim}>{nim}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.money}>{money}</Text>
            <Text style={styles.venture}>{venture}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    number:{
        width:25,
        marginRight:4
    },
    nim:{
        width:65,
        marginRight:7
    },
    name:{
        width:100,
        marginRight:7,
    },
    money:{
        width:50,
        marginRight:7
    },
    venture:{
        fontWeight:'bold',
        width:60,
    },
    itemContainer:{
        flexDirection:'row',
        marginBottom:10,
    },
})