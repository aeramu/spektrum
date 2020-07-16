import React from 'react'
import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
    StyleSheet,
} from 'react-native'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

export default (props) => {
    const {data, loading} = useQuery(SCOREBOARD)

    if (loading) return (
        <View>
            <ActivityIndicator/>
        </View>
    )

    return(
        <View {...props}>
            <Text style={styles.title}>Scoreboard</Text>
            <FlatList
                data={data.scoreboard.edges}
                renderItem={({item}) => (
                    <RenderItem nim={item.nim} name={item.name} money={item.money}/>
                )}
            />
        </View>
    )
}

const RenderItem = ({nim, name, money}) => {
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{nim + '  ' + name}</Text>
            <Text style={styles.money}>{money}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        marginBottom:10,
    },
    name:{
        width:200,
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

const SCOREBOARD = gql`
    {
        scoreboard{
            edges{
                id
                nim
                name
                money
            }
        }
    }
`