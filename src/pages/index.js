import React from 'react';
import {Helmet} from 'react-helmet';
import './home.css';
import SocialMediaLinks from '../components/SocialMediaLinks';

const IndexPage = ({data: {allContentfulPage: {edges}}}) => (
  <content className="content">

    <Helmet>
      <title>VogelVrij - juwelen op maat om te koesteren</title>
    </Helmet>
    {edges.map (({node: {intro, description}}) => [
      intro &&
        <div
          key="intro"
          className="page limit-text-width"
          dangerouslySetInnerHTML={{
            __html: intro.childMarkdownRemark && intro.childMarkdownRemark.html,
          }}
        />,
      description &&
        <div
          key="description"
          className="quotedBy limit-text-width"
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark &&
              description.childMarkdownRemark.html,
          }}
        />,
    ])}
    <div className="social-media">
      <SocialMediaLinks isWeb />
    </div>

  </content>
);

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    allContentfulPage(filter: {url: {eq: "home"}}) {
      edges {
        node {
          id
          url
          intro {
            childMarkdownRemark {
              html
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          hero {
            title
            sizes(maxWidth: 1800, quality: 90) {
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
