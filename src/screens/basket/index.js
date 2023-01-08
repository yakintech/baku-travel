import {View, Text, Image, TextInput, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import NumericInput from 'react-native-numeric-input';
import { productsData } from '../../data/products';

const Index = () => {


  // console.log(quantity)
    const renderItem = ({ item }) => {
        return (
          <>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View>
                        <Image style={{ height: 90, width: 90 }} source={{ uri : item.image }} />
              </View>
              <View style={{justifyContent: 'space-between'}}>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                <NumericInput
                  totalWidth={150}
                  totalHeight={40}
                  step={1}
                  valueType="real"
                  rounded
                  textColor="#B0228C"
                  iconStyle={{color: 'white'}}
                  rightButtonBackgroundColor="#EA3788"
                  leftButtonBackgroundColor="#E56B70"
                  minValue={0}
                />
              </View>
            </View>
          </>
        );
}

  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 36, fontWeight: '700'}}>Basket</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 15,
          marginHorizontal: 40,
          backgroundColor: 'cyan',
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: '400', padding: 10}}>
          Delivery for Free until the end of the month
        </Text>
      </View>
          <FlatList
              data={productsData}
              renderItem={renderItem}
          />
    </View>
  );
};

export default Index;
