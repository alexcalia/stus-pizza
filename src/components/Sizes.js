import React from 'react';
import styled from '@emotion/styled';

const SizeBox = styled('label')`
  height: 100px;
  width: 150px;
  background: red;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  border: ${(props) => (props.active ? '2px solid black' : 'none')};

  input {
    display: none;
  }
`;

const Sizes = ({ setSize, price, name }) => (
  <SizeBox>
    {name}
    <input type="radio" name="size" onChange={() => setSize({ name, price })} />
  </SizeBox>
);

export default Sizes;
