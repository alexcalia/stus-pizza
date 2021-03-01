import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 1rem;

  &.currentPage {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const NavBar = () => {
  return (
    <nav
      css={css`
        display: flex;
      `}
    >
      <NavLink to="/" activeClassName="currentPage">
        Home
      </NavLink>
      <NavLink to="/order/" activeClassName="currentPage">
        Order
      </NavLink>
      <NavLink to="/about/" activeClassName="currentPage">
        About
      </NavLink>
      <NavLink to="/contact/" activeClassName="currentPage">
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
