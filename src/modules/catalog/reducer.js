import { SET_PRODUCTS, SET_DEALERS } from "./actions";

const intialState = {
  dealers: null,
  products: [],
};

export const catalogReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_DEALERS:
      return { ...state, dealers: payload };
    default:
      return state;
  }
};
