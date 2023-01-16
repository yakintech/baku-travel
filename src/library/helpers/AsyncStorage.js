import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
    set: async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            // saving error
        }
    },
    get: async (key) => {

        let data = await AsyncStorage.getItem(key)
        if (data != null)
            return JSON.parse(data);
        else
            return [];
    }
}
