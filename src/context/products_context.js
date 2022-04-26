import React, { useReducer, useEffect, useContext } from "react";
import reducer from '../reducers/productsReducer'
import axios from "axios";
import {readFromLocalStorage} from '../utils/handleLocalStorage'

const URL =
    "https://my-json-server.typicode.com/brankostancevic/products/products";

const cartStorageValue = readFromLocalStorage('cart')
const initialCartStorage = cartStorageValue ? JSON.parse(cartStorageValue) : [];

const initialState = {
    areProductsLoaded: false,
    products: [],
    cart: initialCartStorage,
    doesErrorExist: false,
    errorMessage: ''
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
            dispatch({type: "CATCH_ERROR", payload: error.message})
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    function addItemToCart(item) {
        dispatch({type: "ADD_ITEM_TO_CART", payload: item})
    }

    function handleRemoveItemFromCart(id, count) {
        dispatch({type: "REMOVE_ITEM_FROM_CART", payload: {id, count}})
    }

    function handleDeleteCart() {
        dispatch({type: "DELETE_ALL_CART_ITEMS"})
    }



    return (<ProductsContext.Provider value={{...state, addItemToCart, handleRemoveItemFromCart, handleDeleteCart}}>
        {children}
    </ProductsContext.Provider>)
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}