import React from "react";
import { useDispatch } from "react-redux";
import {
  addProductToCartThunk,
  changeProductQuantityThunk,
} from "redux-modules/cart/actions";
import { StyledProduct } from "./styled-components";
import {IMG_HOST, ALT_IMG_ULR} from 'api/constants'

const AddToCartPanel = ({ product }) => {
  const { name, quantity } = product;
  const dispatch = useDispatch();
  const increment = () => dispatch(changeProductQuantityThunk(name, 1));
  const decrement = () => dispatch(changeProductQuantityThunk(name, -1));
  const addToCart = () => dispatch(addProductToCartThunk(product));

  return quantity ? (
    <div>
      <span>{quantity}</span>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  ) : (
    <button onClick={addToCart}>add to cart</button>
  );
};

export const Product = ({ product }) => {
  const { name, price, image } = product;
  return (
    <StyledProduct>
      <img
        width="120"
        height="120"
        src={IMG_HOST.concat(image)}
        alt={ALT_IMG_ULR}
      />
      <div>name: {name}</div>
      <div>price: {price}</div>
      <AddToCartPanel product={product}/>
    </StyledProduct>
  );
};
