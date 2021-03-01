import React from 'react';
import { Global, css } from '@emotion/react';
import Header from './Header';
import Helmet from 'react-helmet';

const Layout = ({children}) => 
<>
  <Global 
    styles={css`
      {
        box-sizing: border-box;
        margin: 0;
      }

      html,
      body {
        margin: 0;
        color: #555;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol';
        font-size: 18px;
        line-height: 1.4;

        /* remove margin for the main div that Gatsby mounts into */
        > div {
          margin-top: 0;
        }
      }
    `}
  />
  <Helmet>
    <html lang="en" />
    <title>Stu's Mail-Order Pizza</title>
    <meta name="description" content="Stu's Mail-Order Pizza" />
  </Helmet>
  <Header />
  <main
    css={css`
      max-width: 1520px;
      margin: 0 auto;
      padding: 0 20px;
    `}
  >{children}</main>
</>
export default Layout