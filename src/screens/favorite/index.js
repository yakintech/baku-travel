import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { favoritesContext } from '../../store/context/FavoritesContext'
import { favoritesStorageHelper } from '../../library/helpers/FavoritesStorageHelper';

const Index = () => {

    const { favorites, setfavorites } = useContext(favoritesContext);

    const empty = () => {
        setfavorites([]);
        favoritesStorageHelper.set([]);
    }

    return (<>
        <View>
            <Button title='Empty' onPress={() => empty()}></Button>
            {

                favorites.map(item => <Text key={item.id}>{item.name}</Text>)
            }
        </View>

    </>
    )
}

export default Index