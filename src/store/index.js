import { legacy_createStore } from "redux";

const globalReducer = (
    state = {
        isSidebarOpen: false,
        isCartOpen: false,
        isLoading: false,
        activeMenuItem: "Shop",
    },
    action
) => {
    if (action.type === "CART_PREVIEW_TOGGLE") {
        return { ...state, isCartOpen: !state.isCartOpen };
    }

    if (action.type === "LOADING_STARTED") {
        return { ...state, isLoading: true };
    }

    if (action.type === "LOADING_COMPLETED") {
        return { ...state, isLoading: false };
    }

    if (action.type === "SIDEBAR_TOGGLE") {
        return {
            ...state,
            isSidebarOpen: !state.isSidebarOpen,
            isCartOpen: false,
        };
    }

    if (action.type === "SET_ACTIVE_MENU_ITEM") {
        return { ...state, activeMenuItem: action.payload };
    }

    return new Error(
        `U globalnom reduceru ne postoji action.type ${action.type}`
    );
    // switch (action.type) {
    //     case "CART_PREVIEW_TOGGLE": {
    //         return { ...state, isCartOpen: !state.isCartOpen };
    //     }

    //     case "LOADING_STARTED": {
    //         return { ...state, isLoading: true };
    //     }

    //     case "LOADING_COMPLETED": {
    //         return { ...state, isLoading: false };
    //     }

    //     case "SIDEBAR_TOGGLE": {
    //         return {
    //             ...state,
    //             isSidebarOpen: !state.isSidebarOpen,
    //             isCartOpen: false,
    //         };
    //     }

    //     case "SET_ACTIVE_MENU_ITEM": {
    //         return { ...state, activeMenuItem: action.payload };
    //     }

    //     default:
    //         throw new Error(
    //             `U globalnom reduceru ne postoji action.type ${action.type}`
    //         );
    // }
};

const store = legacy_createStore(globalReducer);
export default store;
