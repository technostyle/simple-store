import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getCartProducts } from "modules/cart/selectors";
import { changeProductQuantityThunk } from "modules/cart/actions";
import { CounterPanel } from "components/molecules/counter-panel";
import { ProductInfo } from "components/molecules/product-info";
import { NavPanel } from "components/molecules/nav-panel";
import { StyledHeader } from "components/molecules/header";

const StyledCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledCartProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const ChangeQuantityPanel = ({ cartProduct }) => {
  const { name, quantity } = cartProduct;
  const dispatch = useDispatch();
  const increment = () => dispatch(changeProductQuantityThunk(name, 1));
  const decrement = () => dispatch(changeProductQuantityThunk(name, -1));
  const removeFromCart = () =>
    dispatch(changeProductQuantityThunk(name, Number.NEGATIVE_INFINITY));

  return (
    Boolean(quantity) && (
      <CounterPanel
        quantity={quantity}
        onDecrement={decrement}
        onIncrement={increment}
        onRemove={removeFromCart}
      />
    )
  );
};

const CartProduct = ({ cartProduct }) => {
  return (
    <StyledCartProduct>
      <ProductInfo {...cartProduct} />
      <ChangeQuantityPanel cartProduct={cartProduct} />
    </StyledCartProduct>
  );
};

export const Cart = () => {
  const cartProducts = useSelector(getCartProducts);
  return (
    <div>
      <StyledHeader>
        <h1>Cart list</h1>
        <NavPanel>
          <Link to="/">Сatalog</Link>
        </NavPanel>
      </StyledHeader>
      <StyledCartContainer>
        {cartProducts.map((cartProduct, idx) => (
          <CartProduct
            key={cartProduct?.name || idx}
            cartProduct={cartProduct}
          />
        ))}
      </StyledCartContainer>
    </div>
  );
};
