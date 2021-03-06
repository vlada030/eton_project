import React from "react";
import ReactDOM from "react-dom/client";
import "./base_CSS/normalize.css";
import "./base_CSS/index.css";
import App from "./App";
import GlobalProvider from "./context/global_context";
import ProductsProvider from "./context/products_context";
import FilterProvider from "./context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalProvider>
            <ProductsProvider>
                <FilterProvider>
                    <App />
                </FilterProvider>
            </ProductsProvider>
        </GlobalProvider>
    </React.StrictMode>
);
