// import { View, Text, FlatList } from 'react-native'
// import React from 'react'
// import { restaurantsData } from '../../data/restorants'

// const renderItem = ({item}) => {
//     return (
//         <>
//             <View><Text>{item.name}</Text></View>
//         </>
//     )
// }

// const Index = () => {
//   return (
//       <FlatList
//           data={restaurantsData}
//           renderItem = {renderItem}
//       />
//   )
// }

// export default Index

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faBasketShopping,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {productsData} from '../../data/products';
import { basketitemStorageHelper } from '../../library/helpers/BasketStorageHelper';
import { basketitemContext } from '../../store/context/Basketitemcontext';

const Index = ({navigation}) => {
  const Detail = (name, price, image, description, id, category) => {
    navigation.navigate('ProductDetail', {
      name: name,
      price: price,
      image: image,
      description: description,
      id: id,
      category: category,
    });
  };


    const {basketitems, setbasketitems} = useContext(basketitemContext);

    const addToBasket = item => {
      // item.type = 'Museum';
      //favorite control
      let items = basketitems.find(q => q.id == item.id);

      if (items) {
        let filtereditem = basketitems.filter(q => q.id != item.id);
        setbasketitems([...filtereditem]);
        basketitemStorageHelper.set([...filtereditem]);
      } else {
        setbasketitems([...basketitems, item]);
        favoritesStorageHelper.set([...basketitems, item]);
      }
    };

  //   let productsList = productsData.find(item => item.id == item);

  const Box = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() =>
          Detail(
            item.name,
            item.price,
            item.image,
            item.description,
            item.id,
            item.category,
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
            {/* <Text style={styles.versionText}>{item.version}</Text> */}
            <Text style={styles.priceText}>{item.price} AZN</Text>
          </View>
          <View style={{paddingTop: 20}}>
            <Button title="Add to cart" onPress={addToBasket(item)}></Button>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
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
          <FlatList horizontal={true} data={productsData} renderItem={Box} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

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
  categories: {
    paddingLeft: 85,
    paddingTop: 25,
  },
  catButton: {
    backgroundColor: 'pink',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    marginLeft: 20,
  },
  catText: {
    fontSize: 20,
    fontWeight: '500',
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
