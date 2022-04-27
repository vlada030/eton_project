const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_INITIAL_PRODUCTS": {
            return {
                ...state,
                initialProducts: action.payload,
                filteredProducts: action.payload,
            };
        }

        case "HANDLE_SEARCH_TERM_INPUT": {
            return { ...state, searchTerm: action.payload };
        }

        case "FILTER_PRODUCTS": {
            const term = action.payload;

            if (!term)
                return {
                    ...state,
                    noSearchResults: false,
                    filteredProducts: [...state.initialProducts],
                };

            let tempProducts = [...state.initialProducts].filter((item) =>
                item.title.toLowerCase().includes(term)
            );

            if (tempProducts.length !== 0) {
                return {
                    ...state,
                    filteredProducts: [...tempProducts],
                    noSearchResults: false,
                };
            } else {
                return {
                    ...state,
                    filteredProducts: [...tempProducts],
                    noSearchResults: true,
                };
            }
        }

        case "TOGGLE_SORT_ORDER": {
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

            return {
                ...state,
                ascendingSort: !state.ascendingSort,
                filteredProducts: [...tempProducts],
            };
        }

        default:
            throw new Error(
                `U globalnom reduceru ne postoji action.type ${action.type}`
            );
    }
};

export default reducer;
