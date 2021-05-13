import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";

import { App } from "./app";

declare global {
  interface Window { app: any; }
}

window.app = {
  start(initialData: any) {
    render(
      <Provider store={store}>
        <App {...initialData} />
      </Provider>,
      document.getElementById("root")
    );
  },
};
