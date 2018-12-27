import React from 'react';
import {Helmet} from 'react-helmet';
import './basic.css';
import './juweel.css';
import {Photo} from '../components/PhotoGallery';
import Zoom from 'react-reveal';

const Juweel = ({juweelPhoto, story}) => (
  <div className="juweel-container">
      <div className="photo-container"><Photo
        className="photo"
        title={juweelPhoto.title}
        sizes={juweelPhoto.sizes}
        resolutions={juweelPhoto.resolutions}
      />
      </div>
    <div className="juweel-text"><em
    dangerouslySetInnerHTML={{
      __html: story.childMarkdownRemark && story.childMarkdownRemark.html,
    }}/></div>
  </div>
);

const Juwelen = ({data: {allContentfulHunJuweel}}) => (
  <div>
    <Helmet key="helmet">
      <title>VogelVrij, persoonsgebonden juwelen</title>
    </Helmet>
    <div>
      {allContentfulHunJuweel.edges.map (({node: {story, juweelPhoto, order}}) => (
        <div className="juweel-page" id={order} key={order}>
          <Zoom bottom><Juweel juweelPhoto={juweelPhoto} story={story}/></Zoom>
        </div>
      ))}

    </div>
  </div>
);

export default Juwelen;

export const query = graphql`
  query JuwelenQuery {
    allContentfulHunJuweel(sort: {fields: [order], order: DESC}) {
      edges {
        node {
          order
          story {
            childMarkdownRemark {
              html
            }
          }
          juweelPhoto {
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
