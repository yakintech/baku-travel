import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tab from './src/navigation/index'
import { FavoritesProvider } from './src/store/context/FavoritesContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import ContactForm from './src/lessons/hookFormSample/ContactForm'

const App = () => {
  return (<SafeAreaView style={{flex:1,justifyContent:'center'}}>
  {/* <Text>hello</Text> */}
    <ContactForm />
    {/* <FavoritesProvider>
        <NavigationContainer>
          <Tab />
        </NavigationContainer>
      </FavoritesProvider> */}

  </SafeAreaView>
  )
}



export default App