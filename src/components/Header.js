import React from 'react';
import NavBar from './NavBar';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: space-between;
      padding: 0 calc((100vw - 1520px) / 2);
      background: orange;
    `}
  >
    <Link to="/">Stu's Pizza</Link>
    <NavBar />
  </header>
);
export default Header;
