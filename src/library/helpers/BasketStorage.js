import AsyncStorage from "@react-native-async-storage/async-storage";

export const basketStorage = {
    set: async (basket) => {
        try {
            await AsyncStorage.setItem('basket', JSON.stringify(basket))
        } catch (e) {
            // saving error
        }
    },
    get: async () => {

        let data = await AsyncStorage.getItem('basket')
        if (data != null)
            return JSON.parse(data);
        else
            return [];
    }
}