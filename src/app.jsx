import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Cart } from "./components/cart/cart";
import { Catalog } from "./components/catalog/catalog";
import { initializeCatalogThunk } from "modules/catalog/actions";

export const App = ({ dealers }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeCatalogThunk(dealers));
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/">
            <Catalog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
