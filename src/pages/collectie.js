import React from 'react';
import {Helmet} from 'react-helmet';
import PhotoGallery from '../components/PhotoGallery';

const Collectie = ({data: {allContentfulImage: {edges}}}) => {
  const orderedNodes = edges.filter(({node: {order}}) => order);
  return [
    <Helmet key="helmet">
      <title>Laat je inspireren door de ontwerpen van VogelVrij</title>
    </Helmet>,
    <PhotoGallery
      key="photoGallery"
      photoSet={orderedNodes.map(
        ({node: {title, isSmall, photo: {sizes, resolutions}}}, index) => ({
          index,
          isSmall,
          title,
          sizes,
          resolutions,
        })
      )}
    />,
  ];
};

export default Collectie;

export const query = graphql`
  query CollectieQuery {
    allContentfulImage(sort: {fields: [order], order: DESC}) {
      edges {
        node {
          id
          title
          order
          isSmall
          photo {
            sizes(maxWidth: 620) {
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
