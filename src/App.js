import { Fragment } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import { Shop, Cart, PageNotFound } from "./pages";
import { Navigation, ScrollToTopButton } from "./components";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to='shop' />} />
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
