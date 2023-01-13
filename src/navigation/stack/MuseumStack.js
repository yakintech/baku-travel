import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MuseumListScreen from '../../screens/museum';
import DetailScreen from '../../screens/museum/DetailScreen';
// import LocationHeaderView from '../../components/LocationHeaderView.js';
const MuseumMobileStack = createNativeStackNavigator();

const MuseumStack = () => {
  return (
    <>
      <MuseumMobileStack.Navigator>
        <MuseumMobileStack.Screen
          name="MuseumList"
          component={MuseumListScreen}
          options={{
            // headerTitle: () => <LocationHeaderView />,
            headerStyle: {
              backgroundColor: '#1C1C1C',
            },
          }}
        />

        <MuseumMobileStack.Screen
          name="MuseumDetail"
          component={DetailScreen}
        />
      </MuseumMobileStack.Navigator>
    </>
  );
};

export default MuseumStack;
