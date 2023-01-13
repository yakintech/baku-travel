import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './src/navigation/index';
import {FavoritesProvider} from './src/store/context/FavoritesContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LocationProvider} from './src/store/context/LocationContext';
const App = () => {
  return (
    <>
      {/* <LocationProvider> */}
        <FavoritesProvider>
          <NavigationContainer>
            <Tab />
          </NavigationContainer>
        </FavoritesProvider>
      {/* </LocationProvider> */}
    </>
  );
};

export default App;
