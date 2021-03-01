import React from 'react';
import { Global, css } from '@emotion/react';
import Header from './Header';
import Helmet from 'react-helmet';

const Layout = () => 
<>
  <Helmet>
    <html lang="en" />
    <title>Stu's Mail-Order Pizza</title>
    <meta name="description" content="Stu's Mail-Order Pizza" />
  </Helmet>
  <Header />
  <main>{children}</main>
</>
export default Layout