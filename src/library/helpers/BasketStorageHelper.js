import AsyncStorage from '@react-native-async-storage/async-storage';

export const basketitemStorageHelper = {
  set: async basketitems => {
    try {
      await AsyncStorage.setItem('basketitems', JSON.stringify(basketitems));
    } catch (e) {
      // saving error
    }
  },
  get: async () => {
    let data = await AsyncStorage.getItem('basketitems');
    if (data != null) return JSON.parse(data);
    else return [];
  },
};
