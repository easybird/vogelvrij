import React from 'react';
import PhotoGallery, { Photo } from '../components/PhotoGallery';

const Collectie = ({ data: { allContentfulImage: { edges } } }) => (
  <PhotoGallery>
    {edges
    .filter(({ node: { order } }) => order)
    .map(({ node: { title, photo: { sizes, resolutions } } }) => (
      <Photo title={title} sizes={sizes} resolutions={resolutions} zoom/>
    ))}
  </PhotoGallery>
);

export default Collectie;

export const query = graphql`
  query CollectieQuery {
    allContentfulImage(sort: {fields: [order], order: DESC}) {
      edges {
        node {
          id
          title
          order
          photo {
            sizes(maxWidth: 600) {
              ...GatsbyContentfulSizes_withWebp
            }
            resolutions(width: 1200) {
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
