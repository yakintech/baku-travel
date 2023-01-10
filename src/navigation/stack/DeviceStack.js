import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text} from 'react-native'
import DeviceInfo from 'react-native-device-info';

const DeviceMobileStack = createNativeStackNavigator();

function DeviceStack() {
    return (
        <DeviceMobileStack.Navigator>

            <DeviceMobileStack.Screen
                name='DeviceInfo'
                component={Device} />

        </DeviceMobileStack.Navigator>
    )
}

export default DeviceStack




function Device(){
    
    const [batteryLebel, setbatteryLebel] = useState(0);
    const [deviceName, setdeviceName] = useState('');

    useEffect(() => {
      
        DeviceInfo.getBatteryLevel().then((level) => {
            setbatteryLebel(level);
          });

          DeviceInfo.getDeviceName().then(name => {
              setdeviceName(name);
          })
    }, [])
    


    
    return <>
    <SafeAreaView>
        <Text>Battery Level: {batteryLebel}</Text>
        <Text>Device Name: {deviceName}</Text>

    </SafeAreaView>

    </>

}

