import React from "react";
import styled from "styled-components";

const StyledNavPanel = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavPanel = ({ children }) => (
  <StyledNavPanel>{children}</StyledNavPanel>
);
