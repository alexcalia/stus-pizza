import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/react';

// markup
const IndexPage = () => {
  const { heroPizza } = useStaticQuery(graphql`
    query {
      heroPizza: file(relativePath: { eq: "hero-pizza.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <Layout>
        <Image
          css={css`
            height: 500px;
            width: 500px;
          `}
          fluid={heroPizza.sharp.fluid}
        />
        <p>This is the home page</p>
      </Layout>
    </>
  );
};

export default IndexPage;
