import { createSlice } from "@reduxjs/toolkit";
import {readFromLocalStorage, saveToLocalStorage} from '../utils/handleLocalStorage'

const cartStorageValue = readFromLocalStorage("cart");
const initialCartStorage = cartStorageValue ? JSON.parse(cartStorageValue) : [];

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: initialCartStorage,
    },

    reducers: {
        addItemToCart(state, action) {
            const { id } = action.payload;

            const alreadyInCart = state.cart.find((item) => item.id === id);

            // ako vec postoji u Cart-u uradi update
            if (alreadyInCart) {
                const tempCart = state.cart.map((item) => {
                    if (item.id === id) {
                        item.count++
                    }

                    return item;
                });
                saveToLocalStorage("cart", JSON.stringify(tempCart));

                state.cart = [...tempCart];
                return
            }

            // ako ne postoji u Cart-u kreiraj novi unos sa dodatnim propertie COUNT
            const newItem = { ...action.payload, count: 1 };
            saveToLocalStorage(
                "cart",
                JSON.stringify([...state.cart, newItem])
            );
            state.cart.push(newItem);
        },

        handleRemoveItemFromCart(state, action) {
            const { id, count } = action.payload;
            
            if (count > 1) {
                let updatedCart = state.cart.map((item) => {
                    if (item.id === id) {
                        return { ...item, count: item.count - 1 };
                    }

                    return item;
                });

                saveToLocalStorage("cart", JSON.stringify([...updatedCart]));

                state.cart = updatedCart;
                return
            }

            let updatedCart = state.cart.filter((item) => item.id !== id);
            saveToLocalStorage("cart", JSON.stringify([...updatedCart]));
            state.cart = updatedCart;
        },

        handleDeleteCart(state) {
            saveToLocalStorage("cart", JSON.stringify([]));
            state.cart = [];
        },
    },
});


export const cartActions = cartSlice.actions;

export default cartSlice;