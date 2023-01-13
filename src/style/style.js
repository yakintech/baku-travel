import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  row: {
    location: {
      color: 'white',
      fontSize: 18,
      fontWeight: '600',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    name: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
      paddingHorizontal: 10,
    },
    info: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,

      text: {
        color: 'white',
      },
      icon: {
        color: 'white',
      },
    },
  },
  img: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});