import { View, Text, Dimensions,ImageBackground,StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/navigation/index';
import { FavoritesProvider } from './src/store/context/FavoritesContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LocationProvider } from './src/store/context/LocationContext';
import SplashScreen from 'react-native-splash-screen';
import OnBoarding from './src/library/onboarding';
import { storage } from './src/library/helpers/AsyncStorage';
import LinearGradient from 'react-native-linear-gradient';


const App = () => {
  const { width, height } = Dimensions.get('screen');
  const [isShow, setIsShow] = useState(true);


  useEffect(() => {
    // storage.get('onboarding').then(v=>setIsShow(v));
    SplashScreen.hide();
  }, [])

  return (
    isShow ?
      <OnBoarding
        setIsShow={setIsShow}
        renderButtonStyle={{
          position: 'absolute',
          right: 0,
          width: 30,
          height: height,
          opacity: 0,
        }}
        renderItem={(item) =>
          <View style={{
            width: width,
            height: height,
            
          }}>
 <LinearGradient
        colors={['rgba(27, 27, 27, 0.22)', 'rgba(27, 27, 27, 1)']}
        style={{
          width:width,
          position:'absolute',
          height:height/2,
          // backgroundColor:,
          zIndex:999,
          bottom:0}}
      >
<View style={styles.OnBoardTextView}  >
            <Text style={styles.OnBoardTitle}>{item.title}</Text>
            <Text style={{fontSize:17,color:'rgba(150, 150, 150, 1)',paddingVertical:7}}>{item.description}</Text>
          <View style={{backgroundColor:"rgba(185, 255, 102, 1)", borderRadius:15, padding:15, marginTop:32}}>
          <TouchableOpacity >
              <Text style={{textAlign:"center", color:"rgba(0, 6, 0, 1)", fontSize:20}}>Get Started</Text>
            </TouchableOpacity>
          </View>
            </View>
        
      </LinearGradient>




            <ImageBackground 
source={{
  uri:
  item.image,
}}
    style={{width: width, height: height,position:'absolute'}} 
/>
          </View>}
        data={[
          {
            title: 'Dontea Tea Baku',
            image:'https://www.wernersobek.com/wp-content/uploads/resized/2021/05/Heydar-Aliyev-Cultural-Center-1920x0-c-default.jpg',
            description: 'JI. Gajah Mada No.115, Pekauman, Kec. Tegal Barat. Kota Tegak, Jawa Tengah'
          },
          {
            title: 'Dontea Tea Baku',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg/540px-Az%C9%99rbaycan_xal%C3%A7a_muzeyi.jpg',
            description: 'JI. Gajah Mada No.115, Pekauman, Kec. Tegal Barat. Kota Tegak, Jawa Tengah'
          },
          {
            title: 'Dontea Tea Baku',
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Baku_Museum_of_Modern_Art_entrance.jpg/500px-Baku_Museum_of_Modern_Art_entrance.jpg',
            description: 'JI. Gajah Mada No.115, Pekauman, Kec. Tegal Barat. Kota Tegak, Jawa Tengah'
          }
        ]} />
      :
      <LocationProvider>
        <FavoritesProvider>
          <NavigationContainer>
            <Tab />
          </NavigationContainer>
        </FavoritesProvider>
      </LocationProvider>
  )
};

const styles=StyleSheet.create({
  TextView:{
    height:200,
    width:200,
    backgroundColor:'red',
    position:'absolute',
    zIndex:999,
    bottom:0
  },
  OnBoardTitle:{
    color:'white',
    fontSize:33,
    fontWeight:'400',

  },
  OnBoardTextView:{
    marginTop:60,
    padding:20
  }
})

export default App;
