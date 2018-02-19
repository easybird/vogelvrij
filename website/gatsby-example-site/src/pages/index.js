import React from 'react';

const IndexPage = ({ data: { allContentfulPage: { edges } } }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: `url(${edges[0].node.hero.resolutions.src}) no-repeat center center fixed`,
    }}
  >
    {edges.map(({ node: { intro: { intro } } }) => <p>{intro}</p>)}
  </div>
);

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    allContentfulPage(filter: { url: { eq: "home" } }) {
      edges {
        node {
          id
          url
          intro {
            intro
          }
          description {
            description
          }
          hero {
            title
            sizes(maxWidth: 300) {
              ...GatsbyContentfulSizes_withWebp
            }
            resolutions {
              base64
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`;
