import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ToppingBox = styled('div')`
  height: 100px;
  width: 150px;
  background: red;
  margin: 10px;
  font-size: 20px;
  text-align: center;
`;

const AmountBox = styled('div')`
  display: flex;
  height: 30px;
  justify-content: center;
`;

const Topping = ({
  name,
  amount,
  addAmount,
  removeAmount,
  index,
  selectTopping,
}) => {
  const [active, setActive] = useState(false);

  // When the active state of the topping is changed, run the function to add 1/ remove toppings
  useEffect(() => {
    selectTopping(index, active);
  }, [active]);

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
