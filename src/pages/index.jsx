import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import Fonts from "../components/Fonts/Fonts";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <div className='index-container'>
          <Helmet title={config.siteTitle} />
          <Fonts />
          <SEO postEdges={postEdges} />
          <Header />
          <HomePage />
          Dit is de footer!
        </div>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
