import React from 'react';
import './home.css';

const IndexPage = ({ data: { allContentfulPage: { edges } } }) => (
  <content className="content">
    {edges.map(({ node: { intro, description } }) => [
      intro ? <div 
      className="page"
      dangerouslySetInnerHTML={{
        __html: intro.childMarkdownRemark && intro.childMarkdownRemark.html,
      }}
      /> : <div/>,
      description ? <div 
      className="quotedBy"
      dangerouslySetInnerHTML={{
        __html: description.childMarkdownRemark && description.childMarkdownRemark.html,
      }}
      /> : <div/>,
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
            childMarkdownRemark {
              html
            }
          }
          description {
            childMarkdownRemark {
              html
            }
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
