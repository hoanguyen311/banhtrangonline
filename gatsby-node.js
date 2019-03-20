const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
}

exports.createPages = async ({ actions, graphql }) => {
  try {
    const { createPage } = actions;
    const result = await graphql(`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/products/*" } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);
      console.log(JSON.stringify(result));
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/product.js'),
        context: {
          slug: node.fields.slug,
        }
      });
    })

    return result;
  } catch(ex) {
    throw ex;
  }
};