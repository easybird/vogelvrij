import React from 'react';
import './home.css';

const IndexPage = ({ data: { allContentfulPage: { edges } } }) => (
  <content className="content">
    {edges.map(({ node: { intro: { intro }, description: { description } } }) => [
      <div className="page">{intro}</div>,
      <div className="quotedBy">{description}</div>,
    ])}
  </content>
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
