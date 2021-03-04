import React, { useState } from 'react';
import Topping from './Topping';

const OrderForm = () => {
  const [size, setSize] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [toppings, setToppings] = useState([]);
  const [toppingNum, setTopNum] = useState(0);
  const newTopping = { topping: '', price: 0 };

  const addTopping = () => {
    setToppings([...toppings, { ...newTopping, topNum: toppingNum }]);
    setTopNum(toppingNum + 1);
  };

  const removeTopping = (e, topNum) => {
    e.preventDefault();
    const updateToppings = [...toppings];
    let indexRem;
    for (let i = 0; i < toppings.length; i++) {
      if (updateToppings[i].topNum === topNum) indexRem = i;
    }
    updateToppings.splice(indexRem, 1);
    setToppings(updateToppings);
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
            removeTopping={removeTopping}
            topNum={topping.topNum}
            value
          />
        ))}
      </form>
      <button onClick={addTopping}>Add Topping</button>
    </div>
  );
};

export default OrderForm;
