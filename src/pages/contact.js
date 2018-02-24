import React from 'react';
import './basic.css';
import { Photo } from '../components/PhotoGallery';

const Contact = ({ data: { allContentfulPage: { edges } } }) => (
  <div className="basic-container">
    {edges.map(({ node: { intro: { intro }, description: { description }, hero: { title, sizes } } }) => [
      <Photo title={title} sizes={sizes} />,
      <div>
        <div className="page">{intro}</div>,
        <div className="quotedBy">{description}</div>
      </div>,
    ])}
  </div>
);

export default Contact;

export const query = graphql`
  query ContactQuery {
    allContentfulPage(filter: { url: { eq: "contact" } }) {
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
