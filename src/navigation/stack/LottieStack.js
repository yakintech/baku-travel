import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useRef } from 'react'
import Lottie from 'lottie-react-native';
import { View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


const LottieMobileStack = createNativeStackNavigator();

function LottieStack() {

    return (<>
        <LottieMobileStack.Navigator>

            <LottieMobileStack.Screen
                name='Lottie'
                component={LottieSample} />

        </LottieMobileStack.Navigator>
    </>
    )
}


function LottieSample() {

    let lottieRef = useRef(null);

    const play = () => {
        lottieRef.current.play();
    }


    const stop = () => {
        lottieRef.current.pause();
    }


    return <SafeAreaView style={{ flex: 1 }}>
        <Lottie ref={lottieRef} style={{ width: 200, height: 200 }} source={require('../../data/old-man.json')}>

        </Lottie>
        <Button onPress={() => play()} title='play'></Button>
        <Button onPress={() => stop()} title='stop'></Button>

    </SafeAreaView>



}

export default LottieStack