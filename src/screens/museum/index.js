import {View, Text, FlatList, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import { museumsData } from '../../data/museums';
import Icon from 'react-native-vector-icons/Fontisto';
import style from '../../style/style'

const index = ({navigation}) => {


  const renderMuseum = ({item}) => {
    return (
      <>
        <View>
          <Pressable
            onPress={() =>
              navigation.navigate('museumDetail', {
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
                  <View style = {{flexDirection: 'row'}}>
                    <Text style={style.row.info.text}> 2km</Text>
                    <Text style={{color: 'rgb(144, 82, 47)', marginHorizontal: 5}}> Open soon</Text>
                  </View>
                  <Text style={style.row.info.icon}>
                    <Icon name="favorite" size={24} />
                  </Text>
                </View>
              </View>
            </View>
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

export default index;


