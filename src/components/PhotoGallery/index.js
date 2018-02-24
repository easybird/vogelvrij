import React from 'react';
import galleryStyle from './gallery.css';
import Img from 'gatsby-image';

const PhotoGallery = ({ children }) => <section className="gallerySection">{children}</section>;

export const Photo = ({ style, title, sizes }) => (
  <Img style={style} key={title} outerWrapperClassName="gallery" className="image" sizes={sizes} />
);

export default PhotoGallery;
