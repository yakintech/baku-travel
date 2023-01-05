import { View, Text, Image } from 'react-native'
import React from 'react'
import { museumsData } from '../../data/museums'
import MapView, { Marker } from 'react-native-maps';

const DetailScreen = ({ route }) => {

  let { id } = route.params;

  let museum = museumsData.find(q => q.id == id);



  return (<>
    <MapView
      style={{ flex: 1, height: 500 }}
      initialRegion={{
        latitude: museum.latitude,
        longitude: museum.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >

      <Marker
        coordinate={{
          latitude:museum.latitude,
          longitude: museum.longitude
        }}
        title={museum.name}
        description={museum.description.substring(0,50)}
      >

      </Marker>

    </MapView>
    <Text>Name: {museum.name}</Text>
    <Text>Description: {museum.description}</Text>
    <Image
      style={{ width: 400, height: 100 }}
      source={{
        uri: museum.mainImage,
      }}
    />
  </>
  )
}

export default DetailScreen