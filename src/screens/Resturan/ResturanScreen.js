import { View, Text , Image} from 'react-native'
import React from 'react'
import { restorantsData } from '../../data/restorants'


const ResturanScreen = ({route}) => {

    
  let { id } = route.params;

  let restorants = restorantsData.find(q => q.id == id);
  return (
    <View>
    
    <Text>Name: {restorants.name}</Text>
    <Text>Description: {restorants.description}</Text>
    <Image
      style={{ width: 400, height: 100 }}
      source={{
        uri: restorants.mainImage,
      }}
    />



    </View>
  )
}

export default ResturanScreen