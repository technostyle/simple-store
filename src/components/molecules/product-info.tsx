import React from "react";
import styled from "styled-components";
import { IMG_HOST, ALT_IMG_ULR } from "api/constants";
import {Product} from 'common/types'

const IMG_SIZE = "120px";
const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

interface ProductInfoProps extends Product {
  isTotalPrice?: boolean
}

export const ProductInfo = ({ name, price, image, isTotalPrice, quantity }: ProductInfoProps) => {
  const properPrice: boolean | number = !!(isTotalPrice && quantity) ? (quantity * price) : price;
  return (
    <StyledProductInfo>
      <img
        width={IMG_SIZE}
        height={IMG_SIZE}
        src={IMG_HOST.concat(image)}
        alt={ALT_IMG_ULR}
      />
      <div>name: {name}</div>
      <div>price: {properPrice} $</div>
    </StyledProductInfo>
  );
};
