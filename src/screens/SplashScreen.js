import {StyleSheet, View, Image,} from 'react-native';
import React from 'react';


const SplashScreen = () => {

  return (
    <View style={styles.container}>
      <View>

        <Image
          source={require('../../assets/logo/Logo.svg')}
          style={styles.image}
        />

      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:80,
    height:60
  }
});

