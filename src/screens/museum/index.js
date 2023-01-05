import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { museumsData } from '../../data/museums'

const index = ({ navigation }) => {

  const styles = StyleSheet.create({
    img: {
      width: 250,
      height: 100
    }
  })

  const renderMuseum = ({ item }) => {
    return <>
      <Pressable onPress={() => navigation.navigate('museumDetail',
        {
          id: item.id
        })}>

        <Image
          style={styles.img}
          source={{
            uri: item.mainImage,
          }}
        />
        <Text>{item.name}</Text>
      </Pressable>

    </>
  }

  return (<>
    <FlatList
      data={museumsData}
      renderItem={renderMuseum}
    />
  </>
  )
}

export default index