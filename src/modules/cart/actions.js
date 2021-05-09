export const SET_CART_OPEN = "SET_CART_OPEN";
export const CHANGE_PRODUCT_CART_QUANTITY = "CHANGE_PRODUCT_CART_QUANTITY";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export const setCartOpen = (isOpen) => ({
  type: SET_CART_OPEN,
  payload: isOpen,
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
};

export const addProductToCartThunk = (product) => (dispatch) => {
  dispatch(addProductToCart(product));
};
