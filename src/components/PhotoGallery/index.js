import React, {Fragment} from 'react';
import galleryStyle from './gallery.css';
import Img from 'gatsby-image';
import {StyleRoot} from 'radium';
import chunkArray from '../../utils/chunkArray';

let ZMage = null;
let Coverflow = null;
// const PhotoGallery = ({className, photoSet}) => (
//   <section className={`gallerySection ${className}`}>{children}</section>
// );

if (typeof window !== `undefined`) {
  ZMage = require ('react-zmage').default;
  Coverflow = require ('react-coverflow').default;
}

class PhotoGallery extends React.Component {
  state = {
    showCover: false,
  };

  showCover = index => {
    this.setState ({showCover: index});
  };

  groupPhotos = photoSet => {
    let temporarySmallImages = [];
    let temporaryBigImages = [];
    let groupedPhotos = [];
    let lastWasBig = false;

    const addSmallerImages = () => {
      lastWasBig = false;
      chunkArray (temporarySmallImages, 2).forEach (photoPair =>
        groupedPhotos.push (
          <PhotoPair photoPair={photoPair} showCover={this.showCover} />
        )
      );
    };

    const addRemainingSmallerImages = () => {
      if (temporarySmallImages.length !== 0) {
        addSmallerImages ();
      }
    };

    const addLargeImage = () => {
      lastWasBig = true;
      groupedPhotos.push (
        <BigPhoto
          photo={temporaryBigImages.shift ()}
          showCover={this.showCover}
        />
      );
    };

    photoSet.forEach ((photo, index) => {
      const photoWithId = {...photo, id: index};
      const {title, sizes, resolutions, isSmall} = photoWithId;
      if (isSmall) {
        temporarySmallImages.push (photoWithId);
        if (temporarySmallImages.length === 4) {
          addSmallerImages ();
          temporarySmallImages.length = 0;
        }
      } else {
        temporaryBigImages.push (photoWithId);
        addLargeImage ();
      }
    });

    if (temporaryBigImages.length !== 0) {
      temporaryBigImages.forEach (() => {
        if (lastWasBig) {
          addRemainingSmallerImages ();
          addLargeImage ();
        } else {
          addLargeImage ();
          addRemainingSmallerImages ();
        }
      });
    }

    return groupedPhotos;
  };

  render () {
    const {photoSet, className} = this.props;
    const bigPhotos = photoSet.map (({index, title, sizes, resolutions}) => (
      <a onClick={() => this.showCover (index)}>
        <Photo
          key={resolutions.index}
          title={title}
          sizes={sizes}
          resolutions={resolutions}
          zoom
        />
      </a>
    ));

    const coverFlow =
      typeof this.state.showCover === 'number' &&
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={2}
          navigation
          infiniteScroll
          enableHeading={false}
          enableScroll={false}
          active={this.state.showCover}
          media={{
            backgroundColor: 'white',
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            // '@media (max-width: 900px)': {
            //   width: '600px',
            //   height: '300px',
            // },
            // '@media (min-width: 900px)': {
            //   width: '960px',
            //   height: '600px',
            // },
          }}
        >
          {bigPhotos}
        </Coverflow>
      </StyleRoot>;

    return [
      <section className={`gallerySection ${className}`}>
        {this.groupPhotos (photoSet)}
      </section>,
      coverFlow,
    ];
  }
}

export const PhotoPair = ({photoPair, showCover}) => (
  <div className="photo-pair">
    {photoPair.map (({id, title, sizes, resolutions}, index) => (
      <a onClick={() => showCover (id)}>
        <Photo
          className="image"
          key={id}
          title={title}
          sizes={sizes}
          resolutions={resolutions}
          zoom
        />
      </a>
    ))}
  </div>
);

export const BigPhoto = ({
  photo: {resolutions, sizes, title, id},
  showCover,
}) => (
  <div className="big-photo">
    <a onClick={() => showCover (id)}>
      <Photo
        className="big-image"
        key={id}
        title={title}
        sizes={sizes}
        resolutions={resolutions}
        zoom
      />
    </a>
  </div>
);

export const Photo = ({
  style,
  title,
  sizes,
  resolutions,
  className,
  zoom,
  set,
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
      onClick={() => alert ('wut!')}
    />
    {/* {zoom &&
      ZMage &&
      resolutions &&
      <ZMage
        style={{opacity: 0, position: 'absolute', top: 0, left: 0}}
        src={resolutions.src}
        show={true}
        zoom={true}
        set={set}
        toggleZoom={true}
      />} */}

    {overlay && <div className="image-overlay" />}
  </div>
);

export default PhotoGallery;
