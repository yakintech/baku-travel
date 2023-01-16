import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
import {locationContext} from '../../store/context/LocationContext';
import styles from 'react-native-inset-shadow/src/styles';

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
                <View style={style.imgtoptext}>
                  <Text style={style.row.location}>Baku, Old City</Text>
                  <Text style={style.row.name}>{item.name}</Text>
                </View>
                <View style={style.iconSave}>
                    <Pressable
                      style={style.row.info.icon}
                      onPress={() => addToFavorites(item)}>
                      {getStarIcon(item.id)}
                    </Pressable>
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
                  <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Text style={style.row.info.text}>
                      {' '}
                      {calculateDistance(
                        item.latitude,
                        item.longitude,
                        location && location.coords.latitude,
                        location && location.coords.longitude,
                      )}
                      km
                    </Text>
                    <Text
                      style={{color: 'orange', marginHorizontal: 5}}>
                      Open soon
                    </Text>
                  </View>
                  <TouchableOpacity style={style.startButton}>
                    <Text style={style.startText}>Start</Text>
                    <MaterialCommunityIcons name='arrow-top-right' color={'black'} size={15}/>
                  </TouchableOpacity>
                  
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
      <ScrollView>
        <View style={style.Main}>
          <View style={style.topHome}>
            <Text style={style.topText}>Home</Text>
            <View style={style.topIcon}>
              <MaterialCommunityIcons name="bell" size={37} color={'#FFC4DD'} />
            </View>
          </View>
          <View style={style.MainInput}>
            <View>
              <View style={style.newYork}>
                <Text style={style.topTextone}>Welcome to</Text>
                <Text style={style.topTexttwo}>New York 🗽</Text>
              </View>
              <View>
                <Text style={style.topTextone}>
                  Find the best place in city
                </Text>
              </View>
            </View>
            <View style={style.inputBox}>
              <MaterialCommunityIcons name="home-search-outline" color={'black'} size={22} />
              <TextInput placeholder="Find in Baku" fontSize={22} />
            </View>
          </View>
          <View style={style.categoryBox}>
            <Text style={style.textbycategory}>By categories</Text>
            <View>
              <View style={style.categories}>
                <View style={style.littlecategoryBox}>
                  <MaterialCommunityIcons
                    name="clock-time-eight-outline"
                    size={15}
                    color={'white'}
                  />
                  <Text style={style.categorytext}>Time</Text>
                </View>
                <View style={style.littlecategoryBox}>
                  <MaterialCommunityIcons
                    name="crowd"
                    size={15}
                    color={'white'}
                  />
                  <Text style={style.categorytext}>Crowd</Text>
                </View>
                <View style={style.littlecategoryBox}>
                  <MaterialCommunityIcons
                    name="bookmark-outline"
                    size={15}
                    color={'white'}
                  />
                  <Text style={style.categorytext}>Bookmarked</Text>
                </View>
              </View>
              <View style={style.categories1}>
                <View style={style.littlecategoryBox}>
                  <MaterialCommunityIcons
                    name="crowd"
                    size={15}
                    color={'white'}
                  />
                  <Text style={style.categorytext}>Crowd</Text>
                </View>
                <View style={style.littlecategoryBox}>
                  <MaterialCommunityIcons
                    name="bookmark-outline"
                    size={15}
                    color={'white'}
                  />
                  <Text style={style.categorytext}>Bookmarked</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={style.recommendBox}>
            <Text style={style.recommentText}>Our recommendation</Text>
          </View>
        </View>
        <FlatList data={museumsData} renderItem={renderMuseum} />
      </ScrollView>
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
      position:'absolute',
      top:-125,
      left:20,
      backgroundColor:'#292929',
      width:410,
      borderRadius:15,
      height:80,
      paddingHorizontal:15
      // paddingVertical: 10,
      ,
      text: {
        color: 'white',
        fontSize:20,
      },
      icon: {
        color: 'white',
        marginVertical: 5,
      },
    },
  },
  img: {
    width: 450,
    height: 350,
    borderRadius: 30,
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
  topHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 25,
  },
  topText: {
    fontSize: 37,
    fontWeight: '500',
    color: 'white',
  },
  topIcon: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: '#333333',
  },
  Main: {
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 45,
    paddingTop: 15,
  },
  newYork: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topTextone: {
    fontSize: 35,
    color: 'black',
    fontWeight: '400',
  },
  topTexttwo: {
    fontSize: 35,
    color: 'black',
    fontWeight: '500',
    paddingLeft: 8,
  },
  MainInput: {
    backgroundColor: '#21D1CC',
    borderRadius: 24,
    width: 450,
    height: 220,
    paddingHorizontal: 24,
    paddingBottom: 20,
    paddingTop: 35,
    justifyContent: 'space-between',
  },
  inputBox: {
    backgroundColor: '#1BA8A4',
    borderRadius: 100,
    height: 45,
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center',
  },
  textbycategory: {
    color: 'white',
    fontSize: 28,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 5,
  },
  categorytext: {
    color: 'white',
    fontSize: 15,
  },
  littlecategoryBox: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#292929',
    borderRadius: 30,
  },
  categoryBox: {
    paddingTop: 35,
  },
  categories1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 5,
    width: 315,
  },
  recommentText: {
    color: 'white',
    fontSize: 28,
  },
  recommendBox: {
    paddingTop: 15,
  },
  imgtoptext: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 999,
    backgroundColor: '#292929',
    borderRadius: 50,
    paddingBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  iconSave:{
    backgroundColor:'#292929',
    paddingVertical:7,
    position:'absolute',
    top:10,
    left:380,
    zIndex:999,
    borderRadius:100,
    paddingHorizontal:15
  },
  startButton:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#B9FF66',
    padding:15,
    borderRadius:15
  },
  startText:{
    fontSize:15,
    fontWeight:'500'
  }
});
