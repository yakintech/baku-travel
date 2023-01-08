import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faHeart} from '@fortawesome/free-solid-svg-icons';

const ProductDetail = ({route, navigation}) => {
  let {name} = route.params;
  let {price} = route.params;
  let {id} = route.params;
  let {image} = route.params;


  const addCart = (id, name) => {
    fetch(`https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/baskets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id, name: name}),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <View style={styles.box}>
      <View style={styles.productsBox}>
        <View style={styles.iconFont}>
          <TouchableOpacity onPress={navigation.goBack}>
            <FontAwesomeIcon icon={faArrowLeft} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addFavs(id, name)}>
            <FontAwesomeIcon icon={faHeart} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageBox}>
          <Image style={styles.productImage} source={{uri: `${image}`}} />
        </View>
        <View style={styles.flatlistText}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.priceText}>{price} AZN</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => addCart(id, name)}>
        <Text style={styles.buttonText}>Add to basket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  productsBox: {
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  productImage: {
    width: 480,
    height: 480,
    borderRadius: 1,
  },
  box: {
    paddingHorizontal: 20,
    paddingTop: 50,
    flexL: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#5956E9',
  },
  versionText: {
    fontSize: 22,
    paddingTop: 5,
  },
  nameText: {
    fontSize: 40,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  imageBox: {},
  flatlistView: {
    paddingLeft: 30,
  },
  flatlistText: {
    alignItems: 'center',
    paddingTop: 100,
  },
  iconFont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 500,
    paddingBottom: 30,
  },
  button: {
    backgroundColor: '#5956E9',
    paddingHorizontal: 125,
    paddingVertical: 30,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 35,
    width: 450,
  },
  total: {
    fontSize: 25,
    fontWeight: '500',
  },
});
