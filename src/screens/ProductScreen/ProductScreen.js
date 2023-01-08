import {FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faBasketShopping,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Products } from '../../data/products';

const ProductScreen = ({navigation}) => {

  const Detail = (
    name,
    price,
    image,
    id,
  ) => {
    navigation.navigate('ProductDetail', {
      name: name,
      price: price,
      image: image,
      id: id,
    });
  };


//   let productsList = Products.find(item => item.id == item)

  const Box = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          Detail(
            item.name,
            item.price,
            item.image,
            item.id,
          )
        }>
        <View style={styles.productsBox}>
          <View style={styles.imageBox}>
            <Image
              style={styles.productImage}
              source={{uri: `${item.image}`}}
            />
          </View>
          <View style={styles.flatlistText}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price} AZN</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.topHome}>
        <FontAwesomeIcon icon={faBars} size={35} />
        <FontAwesomeIcon icon={faBasketShopping} size={35} />
      </View>
      <View style={styles.textPart}>
        <View>
          <Text style={styles.ourText}>Our</Text>
          <Text style={styles.productsText}>Products</Text>
        </View>
        <View style={styles.inputSearch}>
          <FontAwesomeIcon icon={faSearch} size={35} color={'#C8C8C8'} />
        </View>
      </View>
      <View>
        <ScrollView style={styles.categories} horizontal={true}>
        <TouchableOpacity style={styles.catButton}>
          <View>
            <Text style={styles.catText}>Popular</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catButton}>
          <View>
            <Text style={styles.catText}>Top Rated</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catButton}>
          <View>
            <Text style={styles.catText}>New Collection</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catButton}>
          <View>
            <Text style={styles.catText}>BestSeller</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      </View>
      <View>
        <FlatList horizontal={true} 
        data={Products}
        renderItem={Box}/>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#EEEFF0',
  },
  topHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  textPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 45,
    paddingTop: 50,
  },
  ourText: {
    color: 'black',
    fontSize: 45,
  },
  productsText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
  inputSearch: {
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  categories:{
    paddingLeft:85,
    paddingTop:25,
    
  },
  catButton:{
    backgroundColor:'pink',
    borderRadius:50,
    paddingHorizontal:20,
    paddingVertical:10,
    height:50,
    marginLeft:20
  },
  catText: {
    fontSize:20,
    fontWeight:'500'
  },
  productsBox: {
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
    width: 280,
    height: 350,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  productImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  box: {
    paddingHorizontal: 20,
    paddingTop: 125,
  },
  priceText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#5956E9',
    paddingTop: 15,
  },
  versionText: {
    fontSize: 22,
    paddingTop: 5,
  },
  nameText: {
    fontSize: 29,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  imageBox: {
    position: 'absolute',
    top: -50,
  },
  flatlistView: {
    paddingLeft: 30,
  },
  flatlistText: {
    alignItems: 'center',
    paddingTop: 100,
  },
});
