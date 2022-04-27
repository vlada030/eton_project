import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./global_slice";

const store = configureStore({
    reducer: {
        global: globalSlice.reducer
    }
})

export default store;
