import React, { useState } from 'react';
import styled from '@emotion/styled';

const ToppingBox = styled('div')`
  height: 100px;
  width: ${(props) => (props.active ? '400px' : '150px')};
  background: red;
  margin: 10px;
  font-size: 20px;
  text-align: center;
`;

const AmountBox = styled('div')`
  display: flex;
  height: 30px;
`;

const Topping = ({ name, amount, addAmount, removeAmount, index }) => {
  const [active, setActive] = useState(false);

  return (
    <ToppingBox onClick={() => setActive(!active)}>
      <p>{name}</p>
      {active && (
        <AmountBox>
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeAmount(index);
            }}
          >
            -
          </button>
          <p>{amount}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addAmount(index);
            }}
          >
            +
          </button>
        </AmountBox>
      )}
    </ToppingBox>
  );
};

export default Topping;
