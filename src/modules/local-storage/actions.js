import { setCartProducts } from "modules/cart/actions";
import { getCartProducts } from "modules/cart/selectors";
import {
  writeToLocalStorage,
  readFromLocalStorage,
  CART_STATE_LOCAL_STORAGE_KEY,
} from "utils/local-storage";

export const writeCartStateToLocalStorageThunk = () => (_, getState) => {
  const cartProducts = getCartProducts(getState());
  writeToLocalStorage(CART_STATE_LOCAL_STORAGE_KEY, cartProducts) || [];
};

export const readCartStateFromLocalStorageThunk = () => (dispatch) => {
  const cartProducts = readFromLocalStorage(CART_STATE_LOCAL_STORAGE_KEY) || [];
  dispatch(setCartProducts(cartProducts));
};
