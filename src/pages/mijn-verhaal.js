import React from 'react';
import {Helmet} from 'react-helmet';
import './basic.css';
import { Photo } from '../components/PhotoGallery';

const MijnVerhaal = ({ data: { allContentfulPage: { edges } } }) => (
  <div className="basic-container">
    [<Helmet key="helmet">
      <title>VogelVrij, als in puur, natuurlijk & vol passie</title>
    </Helmet>,
    {edges.map(({ node: { intro, description, hero } }) => [

      hero && (
        <div className="hero-container">
          <Photo title={hero.title} sizes={hero.sizes} className="contact-image" />
        </div>
      ),
      <div className="text-container">
        {intro && (
          <div
            className="page"
            dangerouslySetInnerHTML={{
              __html: intro.childMarkdownRemark && intro.childMarkdownRemark.html,
            }}
          />
        )}
        {description && (
          <div
            className="quotedBy"
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark && description.childMarkdownRemark.html,
            }}
          />
        )}
      </div>,
    ])}]
  </div>
);

export default MijnVerhaal;

export const query = graphql`
  query MijnVerhaalQuery {
    allContentfulPage(filter: { url: { eq: "mijn-verhaal" } }) {
      edges {
        node {
          id
          url
          intro {
            intro
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          hero {
            title
            sizes(maxWidth: 500) {
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
