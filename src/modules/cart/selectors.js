import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const getCartProducts = createSelector(
  cartSelector,
  (cart) => cart?.cartProducts || []
);

export const getUniqueProductsInCart = createSelector(
  getCartProducts,
  (products) => products.length || 0
);
