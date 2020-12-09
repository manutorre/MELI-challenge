import React from "react";
import ReactDOM from "react-dom";
import App from "./client/components/App/App";
import {BrowserRouter} from 'react-router-dom';

var renderOrHydrate = document.getElementById('app').hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

renderOrHydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById("app"));