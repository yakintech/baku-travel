import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MuseumStack from './stack/ShopsStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SightsStack from './stack/SightsStack';
import RestaurantsStack from './stack/RestaurantsStack';
import ShopsStack from './stack/ShopsStack';
import HotelStack from './stack/HotelStack';
import FavoriteStack from './stack/FavoriteStack';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            activeTintColor: '#CB53BF',
            inactiveTintColor: '#F9F9F9',
            backgroundColor: '#1C1C1C'
          },
        }}>
        <Tab.Screen
          name="Sights"
          component={SightsStack}
          options={{
            tabBarLabel: 'Sights',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="chess-rook"
                color={color}
                size={26}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Restaurants"
          component={RestaurantsStack}
          options={{
            tabBarLabel: 'Restaurants',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="restaurant" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Shops"
          component={ShopsStack}
          options={{
            tabBarLabel: 'Shops',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="shopping-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Hotels"
          component={HotelStack}
          options={{
            tabBarLabel: 'Hotels',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="home-outline"
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
                name="bookmark-outline"
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
