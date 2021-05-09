import { createSelector } from "reselect";
import { getCartProducts } from "modules/cart/selectors";

const catalogSelector = (state) => state.catalog;

export const getProducts = createSelector(
  catalogSelector,
  (catalog) => catalog?.products || []
);

export const getDealers = createSelector(
  catalogSelector,
  (catalog) => catalog.dealers
);

export const getProductsWithCartInfo = createSelector(
  [getProducts, getCartProducts],
  (products, cartProducts) => {
    return products.map((product) => {
      const cartProduct = cartProducts.find(
        (cartProduct) => cartProduct.name === product.name
      );
      return cartProduct || product;
    });
  }
);
