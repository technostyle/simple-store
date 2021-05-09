import { createSelector } from "reselect";
// import {getProducts} from 'modules/catalog/selectors'

const cartSelector = (state) => state.cart;

export const getCartProducts = createSelector(
  cartSelector,
  (cart) => cart?.cartProducts || []
);
