import React from 'react'
import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
    StyleSheet,
} from 'react-native'
import AccountList from './accountList'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

export default (props) => {
    const {data, loading, refetch} = useQuery(SCOREBOARD)

    if (loading) return (
        <View>
            <ActivityIndicator/>
        </View>
    )

    return(
        <View {...props}>
            <Text style={styles.title}>Scoreboard</Text>
            <Text>Unlock Next Day!</Text>
            <ProgressBar progress={data.scoreboard.sum} target={data.scoreboard.target}/>
            <View style={styles.divider}/>
            <AccountList data={data.scoreboard.edges}/>
        </View>
    )
}

const ProgressBar = ({progress, target}) => (
    <View style={styles.progressBar}>
        <View style={{
            flex: progress, 
            height:20,
            backgroundColor:'#bbbbbb'
        }}
        />
        <View style={{
            flex: target - progress, 
            height:20
        }}
        />
        <Text style={{position:'absolute'}}>{progress}/{target}</Text>
    </View>
)

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
                venture
            }
            sum
            target
        }
    }
`