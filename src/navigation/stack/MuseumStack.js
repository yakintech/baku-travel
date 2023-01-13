import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MuseumListScreen from '../../screens/museum';
import DetailScreen from '../../screens/museum/DetailScreen';
import LocationHeaderView from '../../components/LocationHeaderView.js';
const MuseumMobileStack = createNativeStackNavigator();

const MuseumStack = () => {
<<<<<<< HEAD
  return (<>
    <MuseumMobileStack.Navigator>

            <MuseumMobileStack.Screen 
        name='MuseumList'
        component={MuseumListScreen}
        options={{ headerShown: false }} />
            
            <MuseumMobileStack.Screen 
            name='MuseumDetail' 
            component={DetailScreen}/>
=======
  return (
    <>
      <MuseumMobileStack.Navigator>
        <MuseumMobileStack.Screen
          name="MuseumList"
          component={MuseumListScreen}
          options={{
            headerTitle: () => <LocationHeaderView />,
            headerStyle: {
              backgroundColor: '#1C1C1C',
            },
          }}
        />
>>>>>>> e4f223f2b157b6446ed58de9c0aec7928d7c163c

        <MuseumMobileStack.Screen
          name="MuseumDetail"
          component={DetailScreen}
        />
      </MuseumMobileStack.Navigator>
    </>
  );
};

export default MuseumStack;
