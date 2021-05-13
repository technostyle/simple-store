import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartProducts } from "modules/cart/selectors";
import {
  changeProductQuantityThunk,
  clearCartThunk,
} from "modules/cart/actions";
import { ClearCartButton } from "components/atoms/buttons";
import { CounterPanel } from "components/molecules/counter-panel";
import { ProductInfo } from "components/molecules/product-info";
import { NavPanel } from "components/molecules/nav-panel";
import { StyledHeader } from "components/molecules/header";
import {StyledCartContainer,StyledCartProduct } from './styled-components'
import {Product} from 'common/types';

interface ChangeQuantityPanelProps {
  cartProduct: Product
}

const ChangeQuantityPanel = ({ cartProduct }: ChangeQuantityPanelProps) => {
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

const CartProduct = ({ cartProduct }: ChangeQuantityPanelProps) => {
  return (
    <StyledCartProduct>
      <ProductInfo {...cartProduct} isTotalPrice />
      <ChangeQuantityPanel cartProduct={cartProduct} />
    </StyledCartProduct>
  );
};

export const Cart = () => {
  const cartProducts = useSelector(getCartProducts);
  const dispatch = useDispatch();
  const onClearCart = () => dispatch(clearCartThunk());
  return (
    <>
      <StyledHeader>
        <h1>Cart </h1>
        <NavPanel>
          <Link to="/">Сatalog</Link>
        </NavPanel>
      </StyledHeader>
      <StyledCartContainer>
        {cartProducts.length > 0 && <ClearCartButton onClick={onClearCart} />}
        {cartProducts.map((cartProduct: any, idx: number)=> (
          <CartProduct
            key={cartProduct?.name || idx}
            cartProduct={cartProduct}
          />
        ))}
      </StyledCartContainer>
    </>
  );
};
