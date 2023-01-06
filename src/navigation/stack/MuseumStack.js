import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MuseumListScreen from '../../screens/museum/index'
import DetailScreen from '../../screens/museum/DetailScreen'


const MuseumMobileStack = createNativeStackNavigator();

const MuseumStack = () => {
  return (<>
    <MuseumMobileStack.Navigator>

            <MuseumMobileStack.Screen 
            name='MuseumList' 
            component={MuseumListScreen}/>
            
            <MuseumMobileStack.Screen 
            name='MuseumDetail' 
            component={DetailScreen}/>

    </MuseumMobileStack.Navigator>
  </>)
}

export default MuseumStack