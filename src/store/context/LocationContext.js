import {useState, createContext, useEffect} from 'react';
import {requestLocationPermission} from '../../library/helpers/requestLocationPermission';
import Geolocation from 'react-native-geolocation-service';

export const locationContext = createContext(null);

export const LocationProvider = ({children}) => {
  //GLOBAL STATE
  const [location, setLocation] = useState('');

  const values = {
    location,
    setLocation,
  };

  useEffect(() => {
    const getPermission = async () => {
      const isPermited = await requestLocationPermission();
      console.log(isPermited);
    };

    getPermission();
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  return (
    <locationContext.Provider value={values}>
      {children}
    </locationContext.Provider>
  );
};
