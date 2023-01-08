import {useState, createContext, useEffect} from 'react';
import {basketitemStorageHelper} from '../../library/helpers/BasketStorageHelper';

export const basketitemContext = createContext(null);

export const BasketitemsProvider = ({children}) => {
  //GLOBAL STATE
  const [basketitems, setbasketitems] = useState([]);

  const values = {
    basketitems,
    setbasketitems,
  };

  useEffect(() => {
    basketitemStorageHelper.get().then(data => {
      setbasketitems(data);
    });
  }, []);

  return (
    <basketitemContext.Provider value={values}>
      {children}
    </basketitemContext.Provider>
  );
};
