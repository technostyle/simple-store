import React from "react";
import styled from "styled-components";

const buttonSize = "40px";

const colors = {
  dark: "#0a0a0a",
  neutral: "#f0f6f7",
  primary: "#3211ed",
  success: "#32a852",
  danger: "#de2c1f",
};

const hover = {
  success: "#a1f792",
  danger: "#fa7380",
};


interface ButtonProps {
  onClick: () => void,
  type?: "success" | "danger",
  isOutline?: boolean,
  height?: string,
  width?: string,
  children?: any
}

const StyledButton = styled.button<ButtonProps>`
  font-size: 16px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: ${({ isOutline }) => (isOutline ? colors.dark : colors.neutral)};
  border: solid 2px;
  border-radius: 5px;
  border-color: ${({ type }) => colors[type]};
  background-color: ${({ type, isOutline }) =>
    isOutline ? colors.neutral : colors[type]};
  &:hover {
    ${({ type, isOutline }) => (isOutline ? hover[type] : colors.neutral)};
  }
  text-align: center;
  text-decoration: none;
  outline: none;
`;


export const Button = ({
  onClick,
  type,
  isOutline,
  height,
  width,
  children,
}: ButtonProps) => (
  <StyledButton
    onClick={onClick}
    // @ts-ignore
    type={type}
    isOutline={isOutline}
    height={height}
    width={width}
  >
    {children}
  </StyledButton>
);


export const CounterButton = ({ onClick, children} : ButtonProps) => (
  <Button
    onClick={onClick}
    height={buttonSize}
    width={buttonSize}
    isOutline
    type={"success"}
  >
    {children}
  </Button>
);
export const AddToCartButton = ({ onClick, children }: ButtonProps) => (
  <Button onClick={onClick} height={buttonSize} type={"success"}>
    {children}
  </Button>
);
export const ClearCartButton = ({ onClick }: ButtonProps) => (
  <Button onClick={onClick} height={buttonSize} type={"danger"} isOutline>
    Clear Cart
  </Button>
);
export const RemoveFromCartButton = ({ onClick }: ButtonProps) => (
  <Button
    onClick={onClick}
    height={buttonSize}
    width={buttonSize}
    type={"danger"}
    isOutline
  >
    ❌
  </Button>
);
