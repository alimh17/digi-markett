import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./store";

import "./index.css";
import MainLayouts from "./layouts/MainLayouts";

render(
  <Provider store={store}>
    <MainLayouts>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainLayouts>
  </Provider>,
  document.getElementById("root")
);
