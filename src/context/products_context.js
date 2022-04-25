import React, { useReducer, useEffect, useContext } from "react";
import reducer from '../reducers/productsReducer'
import axios from "axios";

const URL =
    "https://my-json-server.typicode.com/brankostancevic/products/products";

const initialState = {
    areProductsLoaded: false,
    products: [],
    cart: []
}

const ProductsContext = React.createContext();

export default function ProductsProvider({children})  {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        dispatch({type: "START_FETCHING"})
        
        try {
            const {data} = await axios(URL)
            
            dispatch({type: "FETCH_ALL_DATA_SUCCESS", payload: data})
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);



    return (<ProductsContext.Provider value={{...state}}>
        {children}
    </ProductsContext.Provider>)
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}