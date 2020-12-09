import React from "react";
import ReactDOM from "react-dom";
import App from "./client/components/App/App";
import {BrowserRouter} from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';
ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("app"));