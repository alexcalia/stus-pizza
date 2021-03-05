import React, { useState } from 'react';
import Topping from './Topping';
import Sizes from './Sizes';
import toppingsFile from '../utils/toppings';
import sizesFile from '../utils/sizes';
import styled from '@emotion/styled';

const ToppingContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const SizeContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const OrderForm = () => {
  const [size, setSize] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [toppings, setToppings] = useState(toppingsFile);

  // Function to add more of the selected topping
  const addAmount = (index) => {
    const copyTops = [...toppings];
    copyTops[index].amount = copyTops[index].amount + 1;
    setToppings(copyTops);
  };

  // Function to remove amount from selected topping
  const removeAmount = (index) => {
    const copyTops = [...toppings];
    copyTops[index].amount = copyTops[index].amount - 1;
    setToppings(copyTops);
  };

  // Function to add 1 or reset topping amount when it is selected/de-selected
  const selectTopping = (index, active) => {
    const copyTops = [...toppings];
    if (active === false) {
      copyTops[index].amount = 0;
    } else {
      copyTops[index].amount = 1;
    }
    setToppings(copyTops);
  };

  return (
    <div className="orderFormContainer">
      <SizeContainer>
        {sizesFile.map((pizzaSize, index) => (
          <Sizes
            active={pizzaSize.size === size.name ? true : false}
            setSize={setSize}
            name={pizzaSize.size}
            price={pizzaSize.price}
            key={`size${index}`}
          />
        ))}
      </SizeContainer>
      <ToppingContainer>
        {toppings.map((topping, index) => (
          <Topping
            key={`topping${index}`}
            name={topping.name}
            amount={topping.amount}
            addAmount={addAmount}
            removeAmount={removeAmount}
            index={index}
            selectTopping={selectTopping}
          />
        ))}
      </ToppingContainer>
    </div>
  );
};

export default OrderForm;
