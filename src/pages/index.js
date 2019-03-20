import React from "react";
import { Link, graphql } from "gatsby";
import { Card, Container, Row, Col } from 'react-bootstrap';
import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <Row>
          {edges.map(({ node }) => {
            const { frontmatter, fields } = node;
            return (
              <Col md={{ span: 4 }}>
                <Link to={fields.slug}>
                  <Card key={node.id} style={{ borderBottom: '1px solid #d2d2d2', marginBottom: 10 }}>
                    <Card.Img variant="top" src={frontmatter.image} alt={frontmatter.name} />
                    <Card.Body>
                      <Card.Title>{frontmatter.name}</Card.Title>
                      <Card.Subtitle>{frontmatter.price}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
}

export default IndexPage;


export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/products/*" } }) {
      edges {
        node {
          id
          frontmatter {
            image
            name
            price
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;