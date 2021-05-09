import React from "react";
import styled from "styled-components";

const badgeSize = "25px";
const StyledBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${badgeSize};
  height: ${badgeSize};
  font-size: 16px;
  background-color: #de2c1f;
  color: white;
  margin-left: 5px;
  border-radius: 50%;
  text-align: center;
`;

export const Badge = ({ children }) => <StyledBadge>{children}</StyledBadge>;
