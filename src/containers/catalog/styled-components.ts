import styled from "styled-components";

const device = {
  tablet: `(max-width: 768px)`,
  mobile: `(max-width: 400px)`,
  mobileS: `(max-width: 300px)`,
};

export const StyledCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex: 100%;
`;

export const StyledProduct = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  width: 25%;
  @media ${device.tablet} {
    width: 33%;
  }
  @media ${device.mobile} {
    width: 50%;
  }
  @media ${device.mobileS} {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
