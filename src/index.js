import React from "react";
import ReactDOM from "react-dom/client";
import "./base_CSS/normalize.css";
import "./base_CSS/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
                    <App />
        </Provider>
    </React.StrictMode>
);
