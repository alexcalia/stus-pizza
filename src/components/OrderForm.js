import React, { useState } from 'react';
import Topping from './Topping';
import toppings from '../utils/toppings';

const OrderForm = () => {
  const [size, setSize] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [selected, setSelected] = useState([]);

  return (
    <div className="orderFormContainer">
      {toppings.map((topping, index) => (
        <Topping key={`topping${index}`} name={topping.name} />
      ))}
    </div>
  );
};

export default OrderForm;
