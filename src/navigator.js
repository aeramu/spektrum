import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
    LoginScreen,
    HomeScreen
} from './screen'

const MainStack = createStackNavigator()
const MainStackNavigator = () => {
    return(
        <MainStack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <MainStack.Screen name='home' component={HomeScreen}/>
        </MainStack.Navigator>
    )
}

export default ({isSignedIn}) => {
    return(
        <NavigationContainer>
            {isSignedIn
                ? <MainStackNavigator/>
                : <LoginScreen/>
            }
        </NavigationContainer>
    )
}