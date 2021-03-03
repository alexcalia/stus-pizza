import React, { useState } from 'react';
import Topping from './Topping';

const OrderForm = () => {
  const newTopping = { topping: '', price: 0 };
  const [size, setSize] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [toppings, setToppings] = useState([]);

  const addTopping = () => {
    setToppings([...toppings, { ...newTopping }]);
  };

  const configTopping = (e) => {
    const updateToppings = [...toppings];
    updateToppings[e.target.dataset.index].topping = e.target.value;
    setToppings(updateToppings);
  };

  return (
    <div className="orderFormContainer">
      <form>
        {toppings.map((topping, index) => (
          <Topping
            key={`topping${index}`}
            index={index}
            configTopping={configTopping}
          />
        ))}
      </form>
      <button onClick={addTopping}>Add Topping</button>
    </div>
  );
};

export default OrderForm;
