import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "redux-modules/cart/reducer";
import { catalogReducer } from "redux-modules/catalog/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cart: cartReducer,
  catalog: catalogReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
