import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./global_slice";
import cartSlice from "./cart_slice";
import productsSlice from "./products_slice";

const store = configureStore({
    reducer: {
        global: globalSlice.reducer,
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
    }
})

export default store;
