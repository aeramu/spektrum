import React from 'react'
import Navigator from './src/navigator'
import {ApolloProvider} from '@apollo/react-hooks'
import {AuthContext} from './src/context'
import {client} from './src/graphql'
import {AsyncStorage} from 'react-native'

export default function App() {
  const [token, setToken] = React.useState(null)

  const authMemo = React.useMemo(() => {
    return({
      setToken: async (token) => {
        await AsyncStorage.setItem("token", token)
        setToken(token)
      },
      removeToken: async () => {
        await AsyncStorage.removeItem("token")
        client.clearStore()
        setToken(null)
      }
    })
  })

  React.useEffect(() => {
    const checkToken = async() => {
      setToken(await AsyncStorage.getItem("token"))
    }
    checkToken()
  })

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authMemo}>
        <Navigator isSignedIn={token}/>
      </AuthContext.Provider>
    </ApolloProvider>
  )
}
