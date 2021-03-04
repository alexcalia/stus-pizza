import React, { useState } from 'react';
import styled from '@emotion/styled';

const ToppingBox = styled('div')`
  height: 100px;
  width: ${(props) => (props.active ? '400px' : '150px')};
  background: red;
  padding-top: 15px;
  margin: 10px;
  font-size: 20px;
  text-align: center;
`;

const AmountBox = styled('div')``;

const Topping = ({ name, amount, addAmount, removeAmount, active }) => {
  return (
    <ToppingBox>
      <p>{name}</p>
      {active && (
        <AmountBox>
          <button onClick={() => removeAmount(name)}>-</button>
          <p>{amount}</p>
          <button onClick={() => addAmount(name)}>+</button>
        </AmountBox>
      )}
    </ToppingBox>
  );
};

export default Topping;
