import React from 'react';
import './home.css';

const IndexPage = ({data: {allContentfulPage: {edges}}}) => (
  <content className="content">
    {edges.map (({node: {intro, description}}) => [
      intro &&
        <div
          key="intro"
          className="page limit-text-width"
          dangerouslySetInnerHTML={{
            __html: intro.childMarkdownRemark && intro.childMarkdownRemark.html,
          }}
        />,
      description &&
        <div
          key="description"
          className="quotedBy limit-text-width"
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark &&
              description.childMarkdownRemark.html,
          }}
        />,
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
            sizes(maxWidth: 1800, quality: 90) {
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
