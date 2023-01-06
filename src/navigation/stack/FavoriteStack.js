import { View, Text } from 'react-native'
import React from 'react';
import FavoritesScreen from './../../screens/favorite'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FavoriteMobileStack = createNativeStackNavigator();


const FavoriteStack = () => {
    return (
        <FavoriteMobileStack.Navigator>

            <FavoriteMobileStack.Screen
                name='FavoritesList'
                component={FavoritesScreen} />

        </FavoriteMobileStack.Navigator>
    )
}

export default FavoriteStack