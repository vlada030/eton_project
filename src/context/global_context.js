import React, { useContext, useReducer } from "react";
import reducer from "../reducers/globalReducer";

const GlobalContext = React.createContext();

const initialState = {
    isSidebarOpen: false,
    isCartOpen: false,
    isLoading: false,
    activeMenuItem: 'Shop'
};

export default function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleStartLoading = () => {
        dispatch({ type: "LOADING_STARTED" });
    };

    const handleStopLoading = () => {
        dispatch({ type: "LOADING_COMPLETED" });
    };

    const handleCartPreview = () => {
        dispatch({ type: "CART_PREVIEW_TOGGLE" });
    };

    const handleSidebarVisibility = () => {
        dispatch({type: "SIDEBAR_TOGGLE"})
    }

    const handleActiveMenuItem = item => {
        dispatch({type: 'SET_ACTIVE_MENU_ITEM', payload: item})
    }
 
    return (
        <GlobalContext.Provider
            value={{
                ...state,
                handleCartPreview,
                handleSidebarVisibility,
                handleStartLoading,
                handleStopLoading,
                handleActiveMenuItem
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
