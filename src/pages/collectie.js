import React from 'react';
import PhotoGallery, { Photo } from '../components/PhotoGallery';

const Collectie = ({ data: { allContentfulImage: { edges } } }) => (
  <div>
    <p>Een overzicht van onze collectie</p>
    <PhotoGallery>
      {edges.map(({ node: { title, photo: { sizes } } }) => <Photo title={title} sizes={sizes} />)}
    </PhotoGallery>
  </div>
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
