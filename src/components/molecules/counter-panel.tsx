import React from "react";
import styled from "styled-components";
import { CounterButton, RemoveFromCartButton } from "components/atoms/buttons";

const PanelContainer = styled.div<{withRemove?: boolean}>`
  width: ${({ withRemove }) => (withRemove ? "170px" : "130px")};
  display: flex;
  justify-content: space-between;
`;

const StyledValue = styled.div`
  font-size: 20px;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: solid 2px #a0a0a0;
  border-radius: 5px;
  display: inline-block;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CounterPanelProps {
  quantity: number,
  onDecrement: () => void,
  onIncrement: () => void,
  onRemove?: () => void,
}

export const CounterPanel = ({
  quantity,
  onDecrement,
  onIncrement,
  onRemove,
}: CounterPanelProps) => {
  return (
    <PanelContainer withRemove={Boolean(onRemove)}>
      <StyledValue>{quantity}</StyledValue>
      <CounterButton onClick={onDecrement}>-</CounterButton>
      <CounterButton onClick={onIncrement}>+</CounterButton>
      {onRemove && <RemoveFromCartButton onClick={onRemove} />}
    </PanelContainer>
  );
};
