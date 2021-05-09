import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "modules/cart/reducer";
import { catalogReducer } from "modules/catalog/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cart: cartReducer,
  catalog: catalogReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
