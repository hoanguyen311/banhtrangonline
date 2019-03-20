import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const { markdownRemark: { frontmatter } } = data;
  const { address, phone, email } = frontmatter;
  return (
    <Layout>
      <SEO title="Page two" />
      <p>Address: {address} </p>
      <p>Phone: {phone} </p>
      <p>Email: {email} </p>
    </Layout>
  );
}

export default SecondPage;

export const query = graphql`
  {
    markdownRemark(fields: { slug: { eq: "/contact/" } }) {
      frontmatter {
        address
        phone
        email
      }
    }
  }
`;
