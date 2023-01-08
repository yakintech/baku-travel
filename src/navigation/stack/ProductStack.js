import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Index from '../../screens/products';
import ProductDetail from '../../screens/products/ProductDetail';

const ProductsStack = createNativeStackNavigator();
const ProductStack = () => {
  return (
    <>
      <ProductsStack.Navigator>
        <ProductsStack.Screen name="ProductList" component={Index} />
        <ProductsStack.Screen name="ProductDetail" component={ProductDetail} />
      </ProductsStack.Navigator>
    </>
  );
};

export default ProductStack;
