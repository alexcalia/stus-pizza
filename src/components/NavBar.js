import React from 'react';
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react';

const NavLink = styled(Link)`

`;

const NavBar = () => {
  return(
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/order/">Order</NavLink>
      <NavLink to="/about/">About</NavLink>
      <NavLink to="/contact/">Contact</NavLink>
    </nav>
  )
};

export default NavBar;