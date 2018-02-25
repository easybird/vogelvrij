import React from 'react';
import './basic.css';
import { Photo } from '../components/PhotoGallery';

const Over = ({ data: { allContentfulPage: { edges } } }) => (
  <div className="basic-container">
    {edges.map(({ node: { intro, description, hero } }) => [
      hero && <Photo title={hero.title} sizes={hero.sizes} />,
      <div>
        {intro && <div className="page">{intro.intro}</div>},
        {description && <div className="quotedBy">{description.description}</div>}
      </div>,
    ])}
  </div>
);

export default Over;

export const query = graphql`
  query OverQuery {
    allContentfulPage(filter: { url: { eq: "over" } }) {
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
