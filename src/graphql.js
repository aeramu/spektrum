import ApolloClient from 'apollo-boost'
import {AsyncStorage} from 'react-native'

export const client = new ApolloClient({
  uri: 'https://pkbxwuq9d9.execute-api.ap-southeast-1.amazonaws.com/graphql',
  // uri: 'http://192.168.43.82:8000',
  request: async (operation) => {
      const token = await AsyncStorage.getItem('token')
      operation.setContext({
        headers: {
          token: token
        }
      })
  },
})