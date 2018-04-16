import React from 'react';
import PhotoGallery, { Photo } from '../components/PhotoGallery';

const Collectie = ({ data: { allContentfulImage: { edges } } }) => (
  <PhotoGallery>
    {edges.map(({ node: { title, photo: { sizes, resolutions } } }) => (
      <Photo title={title} sizes={sizes} resolutions={resolutions} />
    ))}
  </PhotoGallery>
);

export default Collectie;

export const query = graphql`
  query CollectieQuery {
    allContentfulImage {
      edges {
        node {
          id
          title
          photo {
            sizes(maxWidth: 600) {
              ...GatsbyContentfulSizes_withWebp
            }
            resolutions(width: 1000) {
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
