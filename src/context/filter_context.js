import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import { useProductsContext } from "./products_context";
import { debounce } from "../utils/debounce";

const initialState = {
    initialProducts: [],
    filteredProducts: [],
    noSearchResults: false,
    searchTerm: "",
    ascendingSort: true,
};

const FilterContext = React.createContext();

export default function FilterProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products } = useProductsContext();

    useEffect(() => {
        dispatch({ type: "LOAD_INITIAL_PRODUCTS", payload: products });
    }, [products]);

    const handleSearhInput = (text) => {
        dispatch({ type: "FILTER_PRODUCTS", payload: text });
        dispatch({ type: "HANDLE_SEARCH_TERM_INPUT", payload: text });
    };

    const debouncedHandleSearchInput = debounce(handleSearhInput);

    const handleSortingOrder = () => {
        dispatch({ type: "TOGGLE_SORT_ORDER" });
    };

    return (
        <FilterContext.Provider
            value={{ ...state, debouncedHandleSearchInput, handleSortingOrder }}
        >
            {children}
        </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
};
