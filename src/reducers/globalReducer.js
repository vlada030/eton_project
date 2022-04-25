const globalReducer = (state, action) => {

    switch (action.type) {
        case "CART_PREVIEW_TOGGLE": {
            return { ...state, isCartOpen: !state.isCartOpen };
        }

        case "LOADING_STARTED": {
            return { ...state, isLoading: true };
        }

        case "LOADING_COMPLETED": {
            return { ...state, isLoading: false };
        }

        case "SIDEBAR_TOGGLE": {
            return { ...state, isSidebarOpen: !state.isSidebarOpen, isCartOpen: false };
        }  
        
        case 'SET_ACTIVE_MENU_ITEM': {
            return { ...state, activeMenuItem: action.payload};
        }

        default: {
            throw new Error(
                `U globalnom reduceru ne postoji action.type ${action.type}`
            );
        }
    }
}

export default globalReducer;