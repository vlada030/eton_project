import { Fragment } from "react";
import { useEffect } from "react";
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
import {getProductItems} from './store/products_slice'


function App() {   

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProductItems());
        // eslint-disable-next-line
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
