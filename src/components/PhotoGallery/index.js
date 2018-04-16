import React, { Fragment } from 'react';
import galleryStyle from './gallery.css';
import Img from 'gatsby-image';

const PhotoGallery = ({ children }) => <section className="gallerySection">{children}</section>;

if (typeof window !== `undefined`) {
  const ZMage = require('react-zmage');
}

export const Photo = ({ style, title, sizes, resolutions, className }) => (
  <div className="photo-zoom">
    <Img style={style} key={title} outerWrapperClassName="gallery" className={className || 'image'} sizes={sizes} />
    {typeof ZMage !== `undefined` &&
      resolutions && <ZMage style={{ opacity: 0, position: 'absolute', top: 0, left: 0 }} src={resolutions.src} />}
  </div>
);

export default PhotoGallery;
