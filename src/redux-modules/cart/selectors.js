import { createSelector } from "reselect";
// import {getProducts} from 'redux-modules/catalog/selectors'

const cartSelector = (state) => state.cart;

export const getCartProducts = createSelector(
  cartSelector,
  (cart) => cart?.cartProducts || []
);
