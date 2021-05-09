import { writeCartStateToLocalStorageThunk } from "modules/local-storage/actions";
export const SET_CART_PRODUCTS = "SET_CART_PRODUCTS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const CHANGE_PRODUCT_CART_QUANTITY = "CHANGE_PRODUCT_CART_QUANTITY";

export const setCartProducts = (cartProducts) => ({
  type: SET_CART_PRODUCTS,
  payload: cartProducts,
});

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const changeProductQuantity = (name, quantityTerm) => ({
  type: CHANGE_PRODUCT_CART_QUANTITY,
  payload: { name, quantityTerm },
});

export const changeProductQuantityThunk = (name, quantityTerm) => (
  dispatch
) => {
  dispatch(changeProductQuantity(name, quantityTerm));
  dispatch(writeCartStateToLocalStorageThunk());
};

export const addProductToCartThunk = (product) => (dispatch) => {
  dispatch(addProductToCart(product));
  dispatch(writeCartStateToLocalStorageThunk());
};

export const clearCartThunk = () => dispatch => {
  dispatch(setCartProducts([]))
  dispatch(writeCartStateToLocalStorageThunk());
}