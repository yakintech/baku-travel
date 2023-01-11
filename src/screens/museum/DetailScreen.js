import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { museumsData } from '../../data/museums'
import MapView, { Marker } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import Share from 'react-native-share'

const DetailScreen = ({ route }) => {

  let { id } = route.params;

  let museum = museumsData.find(q => q.id == id);


  const onShare = () => {
     Share.open({
    message:'Hello Share',
    title:'Hello Title'
  })
  }

  
 


  const renderItem = ({ item }) => {

    return <Image
      style={{ width: 400, height: 100 }}
      source={{
        uri: item,
      }}
    />
  }


  return (<>
    {/* <MapView
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

    </MapView> */}
    <Text>Name: {museum.name}</Text>
    <Text>Description: {museum.description}</Text>
    <Image
      style={{ width: 400, height: 100 }}
      source={{
        uri: museum.mainImage,
      }}
    />

    <Button onPress={onShare} title="Share" />

    {/* <Carousel
      data={museum.images}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
      autoplay={true}
      loop={true}
    /> */}
  </>
  )
}

export default DetailScreen