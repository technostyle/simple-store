import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useSelector, useDispatch} from 'react-redux'
import { getCartProducts } from "redux-modules/cart/selectors";
import { changeProductQuantityThunk } from "redux-modules/cart/actions";

const IMG_HOST = `https://murmuring-tor-81614.herokuapp.com`;
const ALT_IMG_ULR = `${IMG_HOST}/logo/node.png`;

const StyledCartContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledCartProduct = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px blue;
  box-sizing: border-box;
`;

const ChangeQuantityPanel = ({ cartProduct }) => {
  const { name, quantity } = cartProduct;
  const dispatch = useDispatch();
  const increment = () => dispatch(changeProductQuantityThunk(name, 1));
  const decrement = () => dispatch(changeProductQuantityThunk(name, -1));
  const removeFromCart = () => dispatch(changeProductQuantityThunk(name, Number.NEGATIVE_INFINITY));

  return Boolean(quantity) && (
    <div>
      <span>{quantity}</span>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={removeFromCart}>remove from cart</button>
    </div>
  );
};

const CartProduct = ({ cartProduct }) => {
  const {name, price, image} = cartProduct;
  return (
    <StyledCartProduct>
      <img
        width="120"
        height="120"
        src={IMG_HOST.concat(image)}
        alt={ALT_IMG_ULR}
      />
      <div>name: {name}</div>
      <div>price: {price}</div>
      <ChangeQuantityPanel cartProduct={cartProduct}/>
    </StyledCartProduct>
  );
};

export const Cart = () => {
  const cartProducts = useSelector(getCartProducts);
  return (
    <>
      <div>
        <header>
          <nav>
            <Link to="/">Back to catalog</Link>
          </nav>
        </header>
      </div>
      <h1>Cart list</h1>
      <StyledCartContainer>
        {cartProducts.map((cartProduct, idx) => (
          <CartProduct key={cartProduct?.name || idx} cartProduct={cartProduct} />
        ))}
      </StyledCartContainer>
    </>
  );
};
