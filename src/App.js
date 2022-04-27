import { Fragment } from "react";
import { useEffect } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import { Shop, Cart, PageNotFound } from "./pages";
import { Navigation, ScrollToTopButton } from "./components";
import { useDispatch } from "react-redux";
import { productsActions } from "./store/products_slice";

const URL =
    "https://my-json-server.typicode.com/brankostancevic/products/products";

function App() {
    const dispatch = useDispatch();

    const fetchData = async () => {
        dispatch(productsActions.handleStartFetchingData());

        try {
            const { data } = await axios(URL);

            dispatch(productsActions.handleSuccessfullyFetchedAllData(data));
        } catch (error) {
            dispatch(productsActions.handleCatchError(error.message));
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="shop" />} />
                <Route
                    element={
                        <Fragment>
                            <Navigation />
                            <Outlet />
                            <ScrollToTopButton />
                        </Fragment>
                    }
                >
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
