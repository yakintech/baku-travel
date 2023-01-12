import {View, Text, FlatList, Image, StyleSheet, Pressable} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {museumsData} from '../../data/museums';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/Fontisto';
import style from '../../style/style';
import {favoritesContext} from '../../store/context/FavoritesContext';
import {favoritesStorageHelper} from '../../library/helpers/FavoritesStorageHelper';

const Index = ({navigation}) => {


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

    if (favorite) return <MaterialCommunityIcons name="star" size={26} />;
    else return <MaterialCommunityIcons name="star-outline" size={26} />;
  };

  const renderMuseum = ({item}) => {
    return (
      <>
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
                <View>
                  <Image
                    style={style.img}
                    source={{
                      uri: item.mainImage,
                    }}
                  />
                </View>
                <View style={style.row.info}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={style.row.info.text}> 2km</Text>
                    <Text
                      style={{color: 'rgb(144, 82, 47)', marginHorizontal: 5}}>
                      {' '}
                      Open soon
                    </Text>
                  </View>
                  <Text style={style.row.info.icon}>
                    {/* <Icon name="favorite" size={24} /> */}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => addToFavorites(item)}>
            {getStarIcon(item.id)}
          </Pressable>
        </View>
      </>
    );
  };

  return (
    <>
      <FlatList data={museumsData} renderItem={renderMuseum} />
    </>
  );
};

export default Index;
