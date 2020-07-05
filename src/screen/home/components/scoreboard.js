import React from 'react'
import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
} from 'react-native'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

export default () => {
    const {data, loading} = useQuery(SCOREBOARD)

    if (loading) return (
        <View>
            <ActivityIndicator/>
        </View>
    )

    return(
        <View>
            <FlatList
                ListHeaderComponent={() => (
                    <Text>Scoreboard</Text>
                )}
                data={data.scoreboard.edges}
                renderItem={({item}) => (
                    <Text>{item.nim + ' ' + item.name + ' ' + item.money}</Text>
                )}
            />
        </View>
    )
}

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