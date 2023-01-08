import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BasketScreen from '../../screens/Basket/BasketScreen';

const BasketAStack = createNativeStackNavigator();

const BasketStack = () => {
  return (
    <>
      <BasketAStack.Navigator>
        <BasketAStack.Screen name="BasketScreen" component={BasketScreen} />
      </BasketAStack.Navigator>
    </>
  );
};

export default BasketStack;
