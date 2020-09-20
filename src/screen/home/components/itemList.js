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
            <Text style={styles.name}>{name}</Text> 
            <Text style={styles.description}>{description}</Text>
            <View style={styles.buy}>
                <Text>{'Rp. ' + price}</Text>
                <View style={styles.button}>
                    <Button title='  Buy  ' onPress={() => onPress()}/>
                </View>
            </View>
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
        marginBottom:10,
        alignItems:'flex-start',
        borderWidth:0.5,
        borderRadius:20,
        borderColor:'grey',
        paddingVertical:10,
        paddingHorizontal:10,
    },
    name:{
        fontWeight:'bold',
        fontSize:16
    },
    description:{
        fontSize:13,
    },
    buy:{
        width:270,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        //backgroundColor:'red'
    },
    button:{
        marginTop:10,
        borderRadius:10,
        overflow:'hidden',
    }
})