import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MuseumStack from './stack/MuseumStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const index = () => {


    return (<>

        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name='Museum'
                component={MuseumStack}
                options={{

                    tabBarLabel: 'Museum',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="alien-outline" color={color} size={26} />
                    ),
                }}

            />


        </Tab.Navigator>

    </>
    )
}

export default index