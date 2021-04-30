import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";

import { App } from "./app";
// import {app} from './initialize'

window.app = {
  start(initialData) {
    render(
      <Provider store={store}>
        <App {...initialData} />
      </Provider>,
      document.getElementById("root")
    );
  },
};
