import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MuseumStack from './stack/MuseumStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FavoriteStack from './stack/FavoriteStack';
import DeviceStack from './stack/DeviceStack';
import LottieStack from './stack/LottieStack';

const Tab = createBottomTabNavigator();

const Index = () => {


    return (<>

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#1C1C1C',
                    activeTintColor: '#018CF1',
                    inactiveTintColor: '#f9f9f9',
                }
            }}

        >
            <Tab.Screen
                name='Museum'
                component={MuseumStack}
                options={{

                    tabBarLabel: 'Museum',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chess-rook" color={color} size={26} />
                    )
                }}

            />

            <Tab.Screen
                name='Device'
                component={DeviceStack}
                options={{

                    tabBarLabel: 'Restourans',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="restaurant" color={color} size={26} />
                    )
                }}

            />


            <Tab.Screen
                name='Lottie'
                component={LottieStack}
                options={{

                    tabBarLabel: 'Shops',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="shopping-outline" color={color} size={26} />
                    )
                }}

            />

            <Tab.Screen
                name='Favorites'
                component={FavoriteStack}
                options={{

                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark-outline" color={color} size={26} />
                    )
                }}

            />


        </Tab.Navigator>


    </>
    )
}

export default Index