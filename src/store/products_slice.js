import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "cart",
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
        handleStartFetchingData(state) {
            state.areProductsLoaded = false;
            state.doesErrorExist = false;
            state.errorMessage = "";
        },

        handleSuccessfullyFetchedAllData(state, action) {
            state.products = action.payload;
            state.filteredProducts = action.payload;
            state.areProductsLoaded = true;
            state.doesErrorExist = false;
            state.errorMessage = "";
        },

        handleCatchError(state, action) {
            state.areProductsLoaded = false;
            state.doesErrorExist = true;
            state.errorMessage = action.payload;
        },

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
            state.filteredProducts = tempProducts

        }
    },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
