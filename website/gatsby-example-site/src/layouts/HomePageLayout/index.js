import React from 'react';
import Head from '../../components/Head';
import Header from '../../components/Header';
import '../index.css';
import '../custom-index.css';
import './index.css';
import { Photo } from '../../components/PhotoGallery';
// .find(({ node: { url } }) => url === 'home').node.hero.resolutions.src
const HomePageLayout = ({ children, data: { allContentfulPage: { edges } } }) => (
  <div className="homepage base-layout">
    <Head />
    <Header />
    {children()}
    <div className="background-image">
      <Photo
        style={{
          opacity: 0.4,
        }}
        title="backgroundImage"
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
