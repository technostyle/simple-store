import React from "react";
import { useDispatch } from "react-redux";
import {
  addProductToCartThunk,
  changeProductQuantityThunk,
} from "modules/cart/actions";
import { StyledProduct } from "./styled-components";
import { AddToCartButton } from "components/atoms/buttons";
import { CounterPanel } from "../../components/molecules/counter-panel";
import { ProductInfo } from "../../components/molecules/product-info";

const AddToCartPanel = ({ product }) => {
  const { name, quantity } = product;
  const dispatch = useDispatch();
  const increment = () => dispatch(changeProductQuantityThunk(name, 1));
  const decrement = () => dispatch(changeProductQuantityThunk(name, -1));
  const addToCart = () => dispatch(addProductToCartThunk(product));

  return quantity ? (
    <div>
      <CounterPanel
        quantity={quantity}
        onDecrement={decrement}
        onIncrement={increment}
      />
    </div>
  ) : (
    <AddToCartButton onClick={addToCart}>Add to cart</AddToCartButton>
  );
};

export const Product = ({ product }) => {
  return (
    <StyledProduct>
      <ProductInfo {...product} />
      <AddToCartPanel product={product} />
    </StyledProduct>
  );
};
