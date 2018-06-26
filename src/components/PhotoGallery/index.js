import React, {Fragment} from 'react';
import galleryStyle from './gallery.css';
import Img from 'gatsby-image';
import {StyleRoot} from 'radium';
import chunkArray from '../../utils/chunkArray';
import ReactModal from 'react-modal';
import { ReactCoverCarousel } from 'react-cover-carousel'

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
          className="cover-photo"
          key={resolutions.index}
          title={title}
          sizes={sizes}
          resolutions={resolutions}
        />
      </a>
    ));

    const coverCarousel = (
      <StyleRoot>
        <ReactCoverCarousel
          mediaQueries={{
            backgroundColor: 'white',
            height: '100vh',
          }}
          displayQuantityOfSide={2}
          activeImageStyle={{
            margin: '15%',
          }}
          infiniteScroll={true}
          navigation={false}
          enableHeading={false}
          activeImageIndex={this.state.showCover}
          otherFigureRotation={0}
          activeFigureScale={2.3}
          otherFigureScale={0.9}
          autoFocus
        >
          {bigPhotos}
        </ReactCoverCarousel>
      </StyleRoot>
    );

    return [
      <section className={`gallerySection ${className}`}>
        {this.groupPhotos (photoSet)}
      </section>,
      <ReactModal
        style={{
          overlay: {zIndex: 1001},
          content: {top: 0, left: 0, right: 0, bottom: 0, padding: 0},
        }}
        isOpen={typeof this.state.showCover === 'number'}
        contentLabel="Juwelry portfolio"
      >
        {coverCarousel}
        <div className='close-button-container'><div className='modal-close'>
            <input
              type="checkbox"
              onClick={() => this.setState ({showCover: null})}
            />
            <span />
            <span />
        </div></div>
      </ReactModal>,
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
      sizes={sizes}
      resolutions={resolutions}
      style={style}
      outerWrapperClassName="gallery"
      fadeIn
      className={className || 'image '}
    />
    {overlay && <div className="image-overlay" />}
  </div>
);

export default PhotoGallery;
