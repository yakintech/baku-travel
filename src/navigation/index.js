import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MuseumStack from './stack/MuseumStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoriteStack from './stack/FavoriteStack';
import ProductStack from './stack/ProductStack';
import BasketStack from './stack/BasketStack';


const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Museum"
          component={MuseumStack}
          options={{
            tabBarLabel: 'Museum',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="alien-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={FavoriteStack}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="alien-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProductStack"
          component={ProductStack}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="alien-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="BasketStack"
          component={BasketStack}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="alien-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Index;
