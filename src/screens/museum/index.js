import {View, Text, FlatList, Image, StyleSheet, Pressable} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {museumsData} from '../../data/museums';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/Fontisto';
// import style from '../../style/style';
import {favoritesContext} from '../../store/context/FavoritesContext';
import {favoritesStorageHelper} from '../../library/helpers/FavoritesStorageHelper';
import Geolocation from 'react-native-geolocation-service';
// import InsetShadow from 'react-native-inset-shadow';
import {getDistance} from 'geolib';
import Overlay from 'react-native-elements';
import { locationContext } from '../../store/context/LocationContext';


const Index = ({navigation}) => {
  const {location, setLocation} = useContext(locationContext);

  // console.log(location.coords.latitude);

        const calculateDistance = (
          latitude,
          longitude,
          device_latitude,
          device_longitude,
        ) => {
          return Math.floor(
            getDistance(
              {latitude: latitude, longitude: longitude},
              {latitude: device_latitude, longitude: device_longitude},
            ) / 1000,
          );
        };
  


  // const calculateDistance = (latitude, longitude, my_latitude, my_longitude) => {
  //   return Math.floor(
  //     getDistance(
  //       { latitude: latitude, longitude: longitude },
  //       {latitude: my_latitude, longitude: my_longitude}
  //     ) / 1000
  //   )
  // }

  const {favorites, setfavorites} = useContext(favoritesContext);

  const addToFavorites = item => {
    item.type = 'Museum';
    //favorite control
    let favorite = favorites.find(q => q.id == item.id);

    if (favorite) {
      let filteredFavorites = favorites.filter(q => q.id != item.id);
      setfavorites([...filteredFavorites]);
      favoritesStorageHelper.set([...filteredFavorites]);
    } else {
      setfavorites([...favorites, item]);
      favoritesStorageHelper.set([...favorites, item]);
    }
  };

  const getStarIcon = id => {
    let favorite = favorites.find(q => q.id == id);

    if (favorite)
      return (
        <MaterialCommunityIcons
          style={style.row.info.icon}
          name="bookmark"
          color={'#018CF1'}
          size={26}
        />
      );
    else
      return (
        <MaterialCommunityIcons
          name="bookmark-outline"
          color={'#F6F6F6'}
          size={26}
          style={style.row.info.icon}
        />
      );
  };

  const renderMuseum = ({item}) => {
    return (
      <View style={style.body}>
        <View>
          <Pressable
            onPress={() =>
              navigation.navigate('MuseumDetail', {
                id: item.id,
              })
            }>
            <View style={style.container}>
              <View style={style.row}>
                <View
                  style={{position: 'absolute', top: 0, left: 0, zIndex: 999}}>
                  <Text style={style.row.location}>Baku, Old City</Text>
                  <Text style={style.row.name}>{item.name}</Text>
                </View>
                <View style={style.animation}>
                  <Image
                    style={style.img}
                    source={{
                      uri: item.mainImage,
                    }}
                  />
                </View>
                <View style={style.row.info}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={style.row.info.text}>
                      {' '}
                      {
                       calculateDistance(item.latitude, item.longitude, location && location.coords.latitude, location && location.coords.longitude)
                      }
                      km
                    </Text>
                    <Text
                      style={{color: 'rgb(144, 82, 47)', marginHorizontal: 5}}>
                      Open soon
                    </Text>
                  </View>
                  <Pressable
                    style={style.row.info.icon}
                    onPress={() => addToFavorites(item)}>
                    {getStarIcon(item.id)}
                  </Pressable>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList data={museumsData} renderItem={renderMuseum} />
    </>
  );
};

export default Index;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  body: {
    // paddingTop: 10,
    // flex:1
  },
  row: {
    location: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontFamily: 'System',
      fontStyle: 'normal',
    },
    name: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
      paddingHorizontal: 10,
      fontFamily: 'System',
      fontStyle: 'normal',
    },
    info: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // paddingVertical: 10,

      text: {
        color: '#909090',
      },
      icon: {
        // color: 'white',
        marginVertical: 5,
      },
    },
  },
  img: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  animation: {
    shadowColor: '#red',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
});
