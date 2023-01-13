import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faTrash} from '@fortawesome/free-solid-svg-icons';

const BasketScreen = ({navigation}) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    getBasket();
  });

  const deleteCart = (id) => {

    fetch(`https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/baskets/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status == 200) {
        setBasket();
      }
    });
  }

  const getBasket = () => {
    fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/baskets')
      .then(res => res.json())
      .then(data => {
        setBasket(data);
      });
  };

  const BasketBox = ({item}) => {
    return (
      <View style={styles.box}>
        <View>
          <View style={styles.img}></View>
        </View>
        <View style={styles.textPart}>
          <Text style={styles.proName}>{item.name}</Text>
          <TouchableOpacity onPress={() => deleteCart(item.id)}><FontAwesomeIcon icon={faTrash} size={30} color={"red"}/></TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBasket}>
        <TouchableOpacity onPress={navigation.goBack}>
          <FontAwesomeIcon icon={faArrowLeft} size={25} />
        </TouchableOpacity>
        <Text style={styles.basketText}>Basket</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faTrash} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.Basket}>
        <FlatList data={basket} renderItem={BasketBox} />
      </View>
      <View>
        <View style={styles.amount}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.priceText}>AZN</Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  topBasket: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  basketText: {
    fontSize: 27,
    fontWeight: '500',
  },
  Basket: {
    height: '80%',
  },
  button: {
    backgroundColor: '#5956E9',
    paddingHorizontal: 125,
    paddingVertical: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
  },
  buttonBox: {
    paddingHorizontal: 30,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingBottom: 15,
  },
  total: {
    fontSize: 25,
    fontWeight: '500',
  },
  priceText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#5956E9',
  },
  img: {
    backgroundColor:'pink',
    width:100,
    height:100,
    borderRadius:100
  },
  box: {
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:25,
    paddingVertical:15
  },
  proName: {
    fontSize:25,
    fontWeight:'500',
    paddingLeft: 15
  },
  textPart: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:350
  }
});
