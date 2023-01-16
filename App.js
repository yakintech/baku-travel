import { View, Text, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/navigation/index';
import { FavoritesProvider } from './src/store/context/FavoritesContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LocationProvider } from './src/store/context/LocationContext';
import SplashScreen from 'react-native-splash-screen';
import OnBoarding from './src/library/onboarding';
import { storage } from './src/library/helpers/AsyncStorage';

const App = () => {
  const { width, height } = Dimensions.get('screen');
  const [isShow, setIsShow] = useState(true);


  useEffect(() => {
    // storage.get('onboarding').then(v=>setIsShow(v));
    SplashScreen.hide();
  }, [])

  return (
    isShow ?
      <OnBoarding
        setIsShow={setIsShow}
        renderButtonStyle={{
          position: 'absolute',
          right: 0,
          width: 30,
          height: height,
          opacity: 0,
        }}
        renderItem={(item) =>
          <View style={{
            width: width,
            height: height,
            backgroundColor: 'red',
          }}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>}
        data={[
          {
            title: 'Slide 1',
            description: 'Lorem lab lab'
          },
          {
            title: 'Slide 2',
            description: 'Lorem lab lab'
          }
        ]} />
      :
      <LocationProvider>
        <FavoritesProvider>
          <NavigationContainer>
            <Tab />
          </NavigationContainer>
        </FavoritesProvider>
      </LocationProvider>
  )
};

export default App;
