import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux/es/exports";
import { logger } from "redux-logger";

import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer, 
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);

if(module.hot) {
    module.hot.accept(App);
}

