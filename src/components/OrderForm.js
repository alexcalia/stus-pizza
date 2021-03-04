import React, { useState } from 'react';
import Topping from './Topping';
import toppingsFile from '../utils/toppings';

const OrderForm = () => {
  const [size, setSize] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [toppings, setToppings] = useState(toppingsFile);

  const addAmount = (index) => {
    const copyTops = [...toppings];
    copyTops[index].amount = copyTops[index].amount + 1;
    setToppings(copyTops);
  };

  const removeAmount = (index) => {
    const copyTops = [...toppings];
    copyTops[index].amount = copyTops[index].amount - 1;
    setToppings(copyTops);
  };

  return (
    <div className="orderFormContainer">
      {toppings.map((topping, index) => (
        <Topping
          key={`topping${index}`}
          name={topping.name}
          amount={topping.amount}
          addAmount={addAmount}
          removeAmount={removeAmount}
          index={index}
        />
      ))}
    </div>
  );
};

export default OrderForm;
