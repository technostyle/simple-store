import {
  SET_CART_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  CHANGE_PRODUCT_CART_QUANTITY,
} from "./actions";

const intialState = {
  isCartOpen: false,
  cartProducts: [],
  price: [],
};

export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_CART_PRODUCTS:
      return setCartProductsReducer(state, payload);
    case ADD_PRODUCT_TO_CART:
      return addProductToCartReducer(state, payload);
    case CHANGE_PRODUCT_CART_QUANTITY:
      return changeProductsQuantityReducer(state, payload);
    default:
      return state;
  }
};
function setCartProductsReducer(state, payload) {
  return { ...state, cartProducts: payload };
}

function addProductToCartReducer(state, payload) {
  return {
    ...state,
    cartProducts: state.cartProducts.concat({ ...payload, quantity: 1 }),
  };
}

function changeProductsQuantityReducer(state, payload) {
  const { name, quantityTerm } = payload;
  const newCartProducts = state.cartProducts.map((product) => {
    if (product.name !== name) return product;
    const newQuantity = Math.max(product.quantity + quantityTerm, 0);
    if (newQuantity <= 0) return null;

    return {
      ...product,
      quantity: newQuantity,
    };
  });

  return { ...state, cartProducts: newCartProducts.filter(Boolean) };
}
