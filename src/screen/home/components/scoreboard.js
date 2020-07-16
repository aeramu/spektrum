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
            <Text>Unlock Next Day!</Text>
            <View style={styles.progressBar}>
                <View style={{
                    flex:data.scoreboard.sum, 
                    height:20,
                    backgroundColor:'#bbbbbb'
                }}
                />
                <View style={{
                    flex:data.scoreboard.target - data.scoreboard.sum, 
                    height:20
                }}
                />
                <Text style={{position:'absolute'}}>{data.scoreboard.sum}/{data.scoreboard.target}</Text>
            </View>
            <View style={styles.divider}/>
            <FlatList
                data={data.scoreboard.edges}
                renderItem={({item, index}) => (
                    <RenderItem number={index+1} nim={item.nim} name={item.name} money={item.money}/>
                )}
            />
        </View>
    )
}

const RenderItem = ({number, nim, name, money}) => {
    return(
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{number + '. ' + nim + '  ' + name}</Text>
            <Text style={styles.money}>{money}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    name:{
        width:250,
    },
    money:{
        fontWeight:'bold',
    },
    divider:{
        height:1,
        alignSelf:'stretch',
        backgroundColor:'grey',
        marginBottom:20,
    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
    },
    progressBar:{
        alignSelf:'center',
        justifyContent:'center',
        flexDirection:'row',
        width:250,
        borderWidth:0.5,
        borderRadius:10,
        marginBottom:10,
        overflow:'hidden',
        borderColor:'grey',
        marginTop:3,
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
            sum
            target
        }
    }
`