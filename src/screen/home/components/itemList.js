import React from 'react'
import {
    FlatList,
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native'
import {gql} from 'apollo-boost'
import {useMutation} from '@apollo/react-hooks'

export default ({data}) => {
    const [buy] = useMutation(BUY)

    const handleBuyClick = (name, price) => {
        buy({
            variables:{
                name,
                price,
            }
        }).then()
    }

    return(
        <FlatList
            data={data}
            renderItem={({item}) => {
                return(
                    <RenderItem 
                        name={item.name} 
                        description={item.description} 
                        price={item.price}
                        onPress={() => handleBuyClick(item.name, item.price)}
                    /> 
                )
            }}
        />
    )
}

const RenderItem = ({name, description, price, onPress}) => {
    return(
        <View style={styles.itemContainer}>
            <Text>{name + ' ' + description + ' Rp.' + price}</Text>
            <Button title='Buy' onPress={() => onPress()}/>
        </View>
    )
}

const BUY = gql`
    mutation($name: String!, $price: Int!){
        buyItem(item: $name, amount: $price){
            id
            money
        }
    }
`

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        marginBottom:10,
    },
})