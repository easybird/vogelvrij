import React from 'react';
import Helmet from 'react-helmet';
import SEO from '../components/SEO/SEO';
import Fonts from '../components/Fonts/Fonts';
import config from '../../data/SiteConfig';
import Header from '../components/Header/Header';

class Collectie extends React.Component {
  render() {
    const postEdges = this.props.data.allContentfulAsset.edges;
    console.log(postEdges);
    return (
      <div>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <Fonts />
          <SEO postEdges={postEdges} />
          <Header />
          Hier komt de collectie!
        </div>
      </div>
    );
  }
}

export default Collectie;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CollectieQuery {
    allContentfulAsset {
      edges {
        node {
          id
          file {
            url
          }
        }
      }
    }
  }
`;
