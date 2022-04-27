import { createSlice} from '@reduxjs/toolkit'

const globalSlice = createSlice({
    name: "global",
    initialState: {
        isSidebarOpen: false,
        isCartOpen: false,
        isLoading: false,
        activeMenuItem: "Shop",
    },
    reducers: {
    handleStartLoading (state) {
        state.isLoading = true
    },

    handleStopLoading (state) {
        state.isLoading = false;
    },

    handleCartPreview (state, action) {
        state.isCartOpen = !state.isCartOpen
    },

    handleSidebarVisibility (state) {
        state.isSidebarOpen = !state.isSidebarOpen
        state.isCartOpen = false
    },

    handleActiveMenuItem (state, action) {
        state.activeMenuItem = action.payload
    }
    },
});

export const globalActions = globalSlice.actions;

export default globalSlice;