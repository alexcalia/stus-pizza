import React, { useState } from 'react';
import Topping from './Topping';
import toppingsFile from '../utils/toppings';

const OrderForm = () => {
  const [size, setSize] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [toppings, setToppings] = useState(toppingsFile);

  return (
    <div className="orderFormContainer">
      {toppings.map((topping, index) => (
        <Topping
          key={`topping${index}`}
          name={topping.name}
          amount={topping.amount}
        />
      ))}
    </div>
  );
};

export default OrderForm;
