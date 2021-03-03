import React from 'react';

const Topping = ({ index, configTopping }) => (
  <select data-index={index} onChange={configTopping}>
    <option value="pepperoni">Pepperoni</option>
    <option value="olives">Olives</option>
    <option value="peppers">Peppers</option>
    <option value="mushrooms">Mushrooms</option>
    <option value="onion">Onion</option>
  </select>
);

export default Topping;
