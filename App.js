import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tab from './src/navigation/index'
import { FavoritesProvider } from './src/store/context/FavoritesContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (<>

      <FavoritesProvider>
        <NavigationContainer>
          <Tab />
        </NavigationContainer>
      </FavoritesProvider>

  </>
  )
}



export default App