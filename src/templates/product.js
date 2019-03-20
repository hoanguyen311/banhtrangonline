import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { Container } from "react-bootstrap";

const ProductPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { name, image, price } = frontmatter;

  return (
    <Layout>
      <Container>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <img src={image} />
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
}

export default ProductPage;

export const query = graphql`
  query getProduct($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        name
        image
        price
      }
      html
    }
  }
`