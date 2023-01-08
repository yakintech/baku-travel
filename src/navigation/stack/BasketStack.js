import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from '../../screens/basket';
const BasketStackScreen = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <BasketStackScreen.Navigator>
      <BasketStackScreen.Screen
        name="Basket"
        component={Index}
      />
    </BasketStackScreen.Navigator>
  );
};

export default FavoriteStack;
