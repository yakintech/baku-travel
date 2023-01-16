import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MapUrlTile} from 'react-native-maps';

const Index = () => {
  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.headerText}>Favorites</Text>
      </View>
      <View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../assets/Rectangle8.png')}
          />
        </View>
        <View style={styles.topAbsolute}>
          <View style={styles.topAbsolute.inner}>
            <Text style={{color: '#FFFFFF', fontWeight: '500'}}>
              Sparsely crowded
            </Text>
          </View>
          <View style={styles.topAbsolute.inner}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name={'bookmark'}
                color={'#FFFFFF'}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomAbsolute}>
          <View>
            <View>
              <Text style={{color: '#FFFFFF', fontWeight: '600'}}>
                Brooklyn Brodge
              </Text>
            </View>
            <View>
              <Text style={{color: '#FFFFFF'}}>1.3 km away 15mins</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startText}>Start</Text>
              <MaterialCommunityIcons
                name="arrow-top-right"
                color={'black'}
                size={15}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#242424',
    paddingHorizontal: 24,
  },
  topAbsolute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: 24,

    inner: {
      backgroundColor: '#292929',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      paddingHorizontal: 8,
      paddingVertical: 12,
    },
  },

  bottomAbsolute: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#292929',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 24,
    borderRadius: 20,
  },

  headerText: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    fontSize: 32,
    marginTop: 40,
    marginBottom: 19,
    color: '#FFFFFF',
  },

  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  image: {
    width: 382,
    height: 300,
    // backgroundColor: 'white'
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B9FF66',
    padding: 20,
    borderRadius: 15,
  },
  startText: {
    fontSize: 15,
    fontWeight: '500',
  },
});
