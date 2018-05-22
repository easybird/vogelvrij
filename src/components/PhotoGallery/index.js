import React, {Fragment} from 'react';
import galleryStyle from './gallery.css';
import Img from 'gatsby-image';

let ZMage = null;
const PhotoGallery = ({children}) => (
  <section className="gallerySection">{children}</section>
);

if (typeof window !== `undefined`) {
  ZMage = require ('react-zmage').default;
}

export const Photo = ({
  style,
  title,
  sizes,
  resolutions,
  className,
  zoom,
  overlay,
  fullSize,
}) => (
  <div className={zoom && 'photo-zoom'}>
    <Img
      key={title}
      alt={title}
      title={title}
      sizes={sizes}
      resolutions={resolutions}
      style={style}
      outerWrapperClassName="gallery"
      fadeIn
      className={className || 'image '}
    />
    {zoom &&
      ZMage &&
      resolutions &&
      <ZMage
        style={{opacity: 0, position: 'absolute', top: 0, left: 0}}
        src={resolutions.src}
      />}
    {overlay && <div className="image-overlay" />}
  </div>
);

export default PhotoGallery;
