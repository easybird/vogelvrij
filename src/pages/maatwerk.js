import React from 'react';
import './basic.css';
import { Photo } from '../components/PhotoGallery';

const Maatwerk = ({ data: { allContentfulPage: { edges } } }) => (
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
