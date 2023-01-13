import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tab from './src/navigation/index'
import { FavoritesProvider } from './src/store/context/FavoritesContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
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