import React from "react";
import styled from "styled-components";
import { IMG_HOST, ALT_IMG_ULR } from "api/constants";

const IMG_SIZE = "120px";
const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProductInfo = ({ name, price, image }) => (
  <StyledProductInfo>
    <img
      width={IMG_SIZE}
      height={IMG_SIZE}
      src={IMG_HOST.concat(image)}
      alt={ALT_IMG_ULR}
    />
    <div>name: {name}</div>
    <div>price: {price} $</div>
  </StyledProductInfo>
);
