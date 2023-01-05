import {View, Text, FlatList, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import { museumsData } from '../../data/museums';
import Icon from 'react-native-vector-icons/Fontisto';

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
            <View style={styles.container}>
              <View style={styles.row}>
                <View
                  style={{position: 'absolute', top: 0, left: 0, zIndex: 999}}>
                  <Text style={styles.row.location}>Baku, Old City</Text>
                  <Text style={styles.row.name}>Shirvanshah's Palace</Text>
                </View>
                <View>
                  <Image
                    style={styles.img}
                    source={{
                      uri: item.mainImage,
                    }}
                  />
                </View>
                <View style={styles.row.info}>
                  <View style = {{flexDirection: 'row'}}>
                    <Text style={styles.row.info.text}> 2km</Text>
                    <Text style={{color: 'rgb(144, 82, 47)'}}> Open soon</Text>
                  </View>
                  <Text style={styles.row.info.icon}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  row: {
    location: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
      paddingHorizontal: 10,
      paddingVertical: 5,
      
    },
    name: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
      paddingHorizontal: 10,
    },
    info: {

      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,

      text: {
        color: 'white'
      },
      icon: {
        color: 'white'
      }
    },
  },
  img: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
