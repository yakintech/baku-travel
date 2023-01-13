import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './src/navigation/index';
import {FavoritesProvider} from './src/store/context/FavoritesContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LocationProvider} from './src/store/context/LocationContext';
import SplashScreen from 'react-native-splash-screen';
const App = () => {

  useEffect(()=>{
    SplashScreen.hide();
  },[])


  return (
    <>
      <LocationProvider>
        <FavoritesProvider>
          <NavigationContainer>
            <Tab />
          </NavigationContainer>
        </FavoritesProvider>
      </LocationProvider>
    </>
  );
};

export default App;
