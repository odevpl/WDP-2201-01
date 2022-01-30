import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import * as _ from 'lodash';

import styles from './Slider.module.scss';

class Slider extends React.Component {
  state = {
    activeThumbnail: 0,
    activeThumbnailArr: 0,
  };

  handleThumbnailsArrNo(event, value, lastNo) {
    event.preventDefault();
    const newThumbnailsArrNo = this.state.activeThumbnailArr + value;
    this.setState({
      activeThumbnailArr:
        newThumbnailsArrNo > -1 && newThumbnailsArrNo < lastNo
          ? newThumbnailsArrNo
          : this.state.activeThumbnailArr,
    });
  }

  handleActiveThumbChange(event, activeThumbnail) {
    event.preventDefault();
    this.setState({
      activeThumbnail,
    });
  }

  render() {
    const { imagesURLs, thumbnailsInRow } = this.props;
    const { activeThumbnail, activeThumbnailArr } = this.state;

    const renderImagesArr = _.chunk(
      imagesURLs,
      thumbnailsInRow !== 0 ? thumbnailsInRow : 1
    );

    return (
      <div className={styles.root}>
        <div
          className={styles.leftButton}
          onClick={event =>
            this.handleThumbnailsArrNo(event, -1, renderImagesArr.length)
          }
        />
        <SwipeableViews index={activeThumbnailArr} enableMouseEvents>
          {renderImagesArr.map((renderImages, index) => (
            <div key={`gallery-slider-${index}`} className={styles.thumbnails}>
              {renderImages.map((imageURL, index) => (
                <div
                  key={`thumbnail-${index}`}
                  className={
                    imagesURLs.indexOf(imageURL) === activeThumbnail
                      ? styles.sliderImageActive
                      : styles.sliderImage
                  }
                  onClick={event =>
                    this.handleActiveThumbChange(event, imagesURLs.indexOf(imageURL))
                  }
                >
                  <img src={imageURL} alt={`Thumbnail-${index}}`} />
                </div>
              ))}
            </div>
          ))}
        </SwipeableViews>
        <div
          className={styles.rightButton}
          onClick={event =>
            this.handleThumbnailsArrNo(event, 1, renderImagesArr.length)
          }
        />
      </div>
    );
  }
}

Slider.propTypes = {
  imagesURLs: PropTypes.array,
  thumbnailsInRow: PropTypes.number,
};

export default Slider;
