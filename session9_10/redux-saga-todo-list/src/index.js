import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GlobalStyles from "styles/GlobalStyles";
import App from "./pages/App";
import Store from "store";
import "typeface-poppins";

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.getElementById("root")
)