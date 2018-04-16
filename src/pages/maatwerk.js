import React from 'react';
import './basic.css';
import { Photo } from '../components/PhotoGallery';

const Maatwerk = ({ data: { allContentfulPage: { edges } } }) => (
  <div className="basic-container">
    {edges.map(({ node: { intro, description, hero } }) => (
      <div>
        {intro && (
          <div
            className="page"
            dangerouslySetInnerHTML={{
              __html: intro.childMarkdownRemark && intro.childMarkdownRemark.html,
            }}
          />
        )}
        {description && (
          <div
            className="quotedBy"
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark && description.childMarkdownRemark.html,
            }}
          />
        )}
      </div>
    ))}
  </div>
);

export default Maatwerk;

export const query = graphql`
  query MaatwerkQuery {
    allContentfulPage(filter: { url: { eq: "maatwerk" } }) {
      edges {
        node {
          id
          url
          intro {
            intro
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
