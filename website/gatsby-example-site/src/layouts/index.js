import React from 'react';
import Head from '../components/Head';
import Header from '../components/Header';
import HomePageLayout from './HomePageLayout';

const TemplateWrapper = ({ location: { pathname }, children, data }) => {
  switch (pathname) {
    case '/':
      return <HomePageLayout />{children}</HomePageLayout>;
    case '/collectie':
      return (
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1600,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <Head />
          <Header />
          {children()}
        </div>
      );
    default:
      return (
        <div>
          <Head />
          <Header />
          {children()}
        </div>
      );
  }
};

export default TemplateWrapper;

export const query = graphql`
  query Pages {
    allContentfulPage {
      edges {
        node {
          url
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
