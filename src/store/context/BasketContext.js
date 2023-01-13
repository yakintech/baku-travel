import { useState, createContext, useEffect } from 'react'
import { basketStorage } from '../../library/helpers/BasketStorage';

export const basketContext = createContext(null);

export const basketProvider = ({ children }) => {

    //GLOBAL STATE
    const [basket, setbasket] = useState([]);

    const values = {
        basket,
        setbasket
    }

    useEffect(() => {

        basketStorage.get()
            .then(data => {
                setbasket(data);
            })

    }, [])



    return <basketContext.Provider value={values}>{children}</basketContext.Provider>
}