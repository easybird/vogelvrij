import React from 'react';
import galleryStyle from './gallery.css';
import Img from 'gatsby-image';

const PhotoGallery = ({ children }) => <section className="gallerySection">{children}</section>;

export const Photo = ({ title, sizes }) => (
  <Img key={title} outerWrapperClassName="gallery" className="image" sizes={sizes} />
);

export default PhotoGallery;
