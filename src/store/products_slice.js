import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL =
    "https://my-json-server.typicode.com/brankostancevic/products/products";

export const getProductItems = createAsyncThunk(
    "products/getProductItems",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios(URL);
            return data
        } catch (error) {
            //console.error(error);
            return thunkAPI.rejectWithValue(`Error log: ${error.message}`)
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        areProductsLoaded: false,
        products: [],
        doesErrorExist: false,
        errorMessage: "",
        filteredProducts: [],
        noSearchResults: false,
        searchTerm: "",
        ascendingSort: true,
    },

    reducers: {

        handleSearchInput(state, action) {
            const term = action.payload;

            if (!term) {
                state.noSearchResults = false;
                state.filteredProducts = state.products;
                return;
            }

            let tempProducts = state.products.filter((item) =>
                item.title.toLowerCase().includes(term)
            );

            if (tempProducts.length !== 0) {
                state.filteredProducts = tempProducts;
                state.noSearchResults = false;
                state.searchTerm = term;
            } else {
                state.filteredProducts = tempProducts;
                state.noSearchResults = true;
                state.searchTerm = term;
            }
        },

        handleSortingOrder(state) {
            const { ascendingSort, filteredProducts } = state;
            let tempProducts = [];

            if (ascendingSort) {
                tempProducts = [...filteredProducts].sort(
                    (a, b) => b.price - a.price
                );
            } else {
                tempProducts = [...filteredProducts].sort(
                    (a, b) => a.price - b.price
                );
            }

            state.ascendingSort = !state.ascendingSort;
            state.filteredProducts = tempProducts;
        },
    },

    extraReducers: {
        [getProductItems.pending]: (state) => {
            state.areProductsLoaded = false;
            state.doesErrorExist = false;
            state.errorMessage = "";
        },
        [getProductItems.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
            state.areProductsLoaded = true;
            state.doesErrorExist = false;
            state.errorMessage = "";
        },
        [getProductItems.rejected]: (state, action) => {
            state.areProductsLoaded = false;
            state.doesErrorExist = true;
            state.errorMessage = action.payload;
        },
    }
});

export const productsActions = productsSlice.actions;

export default productsSlice;
