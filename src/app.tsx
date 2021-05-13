import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Cart } from "containers/cart/cart";
import { Catalog } from "containers/catalog/catalog";
import { initializeCatalogThunk } from "modules/catalog/actions";
import { readCartStateFromLocalStorageThunk } from "modules/local-storage/actions";

export interface AppProps {
  dealers: Array<string>
}

export const App = ({ dealers } : AppProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeCatalogThunk(dealers));
    dispatch(readCartStateFromLocalStorageThunk());
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Catalog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
