import React from 'react';
import galleryStyle from './gallery.css';
import Img from 'gatsby-image';

const PhotoGallery = ({ children }) => <section className="gallerySection">{children}</section>;

export const Photo = ({ style, title, sizes, className }) => (
  <Img style={style} key={title} outerWrapperClassName="gallery" className={className || 'image'} sizes={sizes} />
);

export default PhotoGallery;
