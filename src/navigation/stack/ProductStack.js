import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductScreen from '../../screens/ProductScreen/ProductScreen';
import ProductDetail from '../../screens/ProductScreen/ProductDetail';

const ProductsStack = createNativeStackNavigator();
const ProductStack = () => {
  return (
    <>
      <ProductsStack.Navigator>
        <ProductsStack.Screen name="ProductScreen" component={ProductScreen} />
        <ProductsStack.Screen name="ProductDetail" component={ProductDetail} />
      </ProductsStack.Navigator>
    </>
  );
};

export default ProductStack;