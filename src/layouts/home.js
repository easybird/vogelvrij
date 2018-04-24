import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import { Photo } from '../components/PhotoGallery';
import './css/index.css';
import './css/custom-index.css';
import './css/home.css';

const HomePageLayout = ({ children, data: { allContentfulPage: { edges } } }) => (
  <div className="layout">
    <div className="homepage base-layout">
    <Head />
    <Header />
    {children()}
  </div>
    <div className="background-image-wrapper">
      <Photo
        overlay={true}
        title="backgroundImage"
        className="background-image"
        sizes={edges[0].node.hero.sizes}
      />
    </div>
  </div>
);

export default HomePageLayout;

export const query = graphql`
  query HomePageLayoutQuery {
    allContentfulPage(filter: { url: { eq: "home" } }) {
      edges {
        node {
          hero {
            title
            sizes(maxWidth: 1400) {
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
