import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCartThunk,
  changeProductQuantityThunk,
} from "redux-modules/cart/actions";
import {getCartProducts} from "redux-modules/cart/selectors";
import { StyledProduct } from "./styled-components";

// TODO: rename app_host
const IMG_HOST = `https://murmuring-tor-81614.herokuapp.com`;
const ALT_IMG_ULR = `${IMG_HOST}/logo/node.png`;

const AddToCartPanel = ({ product }) => {
  const cartProducts = useSelector(getCartProducts);
  // console.log({cartProducts})
  const { name } = product;
  const currentCartProduct = cartProducts.find(
    (cartProduct) => {
      // const isEqual = cartProduct.name === name;
      // console.log({isEqual, cpn: cartProduct.name, name})
      return cartProduct.name === name}
  );
  const {quantity} = currentCartProduct || {};
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
