import { saveToLocalStorage } from "../utils/handleLocalStorage";

const productsReducer = (state, action) => {
    switch (action.type) {
        case "START_FETCHING": {
            return {
                ...state,
                areProductsLoaded: false,
                doesErrorExist: false,
                errorMessage: "",
            };
        }

        case "FETCH_ALL_DATA_SUCCESS": {
            return {
                ...state,
                products: [...action.payload],
                areProductsLoaded: true,
                doesErrorExist: false,
                errorMessage: "",
            };
        }

        case "CATCH_ERROR": {
            return {
                ...state,
                areProductsLoaded: false,
                doesErrorExist: true,
                errorMessage: action.payload,
            };
        }

        case "ADD_ITEM_TO_CART": {
            const { id } = action.payload;

            const alreadyInCart = state.cart.find((item) => item.id === id);

            // ako vec postoji u Cart-u uradi update
            if (alreadyInCart) {
                const tempCart = state.cart.map((item) => {
                    if (item.id === id) {
                        let newCount = item.count + 1;
                        return { ...item, count: newCount };
                    }

                    return item;
                });

                saveToLocalStorage("cart", JSON.stringify(tempCart));

                return { ...state, cart: [...tempCart] };
            }

            // ako ne postoji u Cart-u kreiraj novi unos sa dodatnim propertie COUNT
            const newItem = { ...action.payload, count: 1 };

            saveToLocalStorage(
                "cart",
                JSON.stringify([...state.cart, newItem])
            );

            return { ...state, cart: [...state.cart, newItem] };
        }

        case "REMOVE_ITEM_FROM_CART": {
            const {id, count} = action.payload;

            console.log({id, count});
            if (count > 1) {
                let updatedCart = state.cart.map( item => {
                    if (item.id === id) {
                        return {...item, count: item.count - 1}
                    }

                    return item
                })

                saveToLocalStorage("cart", JSON.stringify([...updatedCart]));
                
                return {...state, cart: [...updatedCart]}
            }

            let updatedCart = state.cart.filter(item => item.id !== id)
            saveToLocalStorage(
                "cart",
                JSON.stringify( [...updatedCart])
            );
            return {...state, cart: [...updatedCart]}
        }

        case "DELETE_ALL_CART_ITEMS": {
            return {...state, cart: []}
        }

        default:
            throw new Error(
                `U products reduceru ne postoji action.type ${action.type}`
            );
    }
};

export default productsReducer;
