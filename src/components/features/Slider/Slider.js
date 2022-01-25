import React from 'react';
import PropTypes from 'prop-types';

import styles from './Slider.module.scss';

class Slider extends React.Component {
  state = {
    activeThumbnail: 0,
    firstThumbnailsNo: 0,
    lastThumbnailsNo: 6,
  };

  render() {
    const { imagesURLs } = this.props;
    const { activeThumbnail, firstThumbnailsNo, lastThumbnailsNo } = this.state;

    const renderImagesURLs = imagesURLs.filter(
      imageURL =>
        imagesURLs.indexOf(imageURL) >= firstThumbnailsNo &&
        imagesURLs.indexOf(imageURL) < lastThumbnailsNo
    );

    return (
      <div className={styles.root}>
        <div className={styles.leftButton} />
        <div className={styles.thumbnails}>
          {renderImagesURLs.map((imageURL, index) => (
            <div
              key={`thumbnail-${index}`}
              className={
                index === activeThumbnail
                  ? styles.sliderImageActive
                  : styles.sliderImage
              }
            >
              <img src={imageURL} alt={`Thumbnail-${index}}`} />
            </div>
          ))}
        </div>
        <div className={styles.rightButton} />
      </div>
    );
  }
}

Slider.propTypes = {
  imagesURLs: PropTypes.array,
};

export default Slider;