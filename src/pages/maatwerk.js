import React from 'react';
import {Helmet} from 'react-helmet';
import './basic.css';
import {Photo} from '../components/PhotoGallery';

const Maatwerk = ({data: {allContentfulMaatwerk}}) => (
  <div className="basic-container">
    <Helmet key="helmet">
      <title>VogelVrij, persoonsgebonden en waardevolle juwelen</title>
    </Helmet>
    <div>
      {allContentfulMaatwerk.edges.map (
        ({node: {description, hero, url}}) => (
          <div id={url} key={url}>
            {description &&
              <div
                className="quotedBy"
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark &&
                    description.childMarkdownRemark.html,
                }}
              />}
            {hero &&
              <div>
                <Photo title={hero.title} sizes={hero.sizes} resolutions={hero.resolutions} style={{width: "100%"}}/>
              </div>}
          </div>
        )
      )}

    </div>
  </div>
);

export default Maatwerk;

export const query = graphql`
  query MaatwerkQuery {
    allContentfulMaatwerk(sort: {fields: [order], order: DESC}) {
      edges {
        node {
          id
          url
          description {
            childMarkdownRemark {
              html
            }
          }
          hero {
            title
            sizes(maxWidth: 1000) {
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
