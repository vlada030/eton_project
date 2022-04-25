const productsReducer = (state, action) => {
    switch (action.type) {
        case "START_FETCHING": {
            return {...state, areProductsLoaded: false}
        }

        case "FETCH_ALL_DATA_SUCCESS": {
            return { ...state, products: [...action.payload], areProductsLoaded: true };
        }

        default:
            throw new Error(
                `U products reduceru ne postoji action.type ${action.type}`
            );
    }
};

export default productsReducer;
