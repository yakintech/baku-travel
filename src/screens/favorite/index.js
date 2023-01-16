// import { View, Text, Button } from 'react-native'
// import React, { useContext } from 'react'
// import { favoritesContext } from '../../store/context/FavoritesContext'
// import { favoritesStorageHelper } from '../../library/helpers/FavoritesStorageHelper';

// const Index = () => {

//     const { favorites, setfavorites } = useContext(favoritesContext);

//     const empty = () => {
//         setfavorites([]);
//         favoritesStorageHelper.set([]);
//     }

//     return (<>
//         <View>
//             <Button title='Empty' onPress={() => empty()}></Button>
//             {

//                 favorites.map(item => <Text key={item.id}>{item.name}</Text>)
//             }
//         </View>

//     </>
//     )
// }

// export default Index




import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MapUrlTile} from 'react-native-maps';

const Index = () => {
  return (
    <View style={{backgroundColor: '#242424', paddingHorizontal: 24}}>
      <View>
        <Text style={styles.headerText}>Favorites</Text>
      </View>
      <View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../assets/Rectangle8.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
            position: 'absolute',
            width: '100%',
            marginTop: 24,
          }}>
          <View
            style={{
              backgroundColor: '#292929',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              paddingHorizontal: 8,
              paddingVertical: 12,
            }}>
            <Text style={{color: '#FFFFFF'}}>Sparsely crowded</Text>
          </View>
          <View
            style={{
              backgroundColor: '#292929',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              paddingHorizontal: 8,
              paddingVertical: 12,
            }}>
            <MaterialCommunityIcons
              name={'bookmark'}
              color={'#FFFFFF'}
              size={28}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    fontSize: 32,
    marginTop: 40,
    marginBottom: 19,
    color: '#FFFFFF',
  },

  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  image: {
    width: 382,
    height: 300,
    // backgroundColor: 'white'
  },
});