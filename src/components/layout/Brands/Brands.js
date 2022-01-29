import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../../features/Slider/Slider';

import styles from './Brands.module.scss';

class Brands extends React.Component {
  state = {
    sliderSize: 0,
  };

  sliderContainer = React.createRef();

  handleSliderSizeChange() {
    if (this.state.sliderSize !== this.sliderContainer.offsetWidth) {
      this.setState({ sliderSize: this.sliderContainer.offsetWidth });
    }
  }

  componentDidUpdate() {
    this.handleSliderSizeChange();
  }

  componentDidMount() {
    this.handleSliderSizeChange();
  }

  render() {
    const { brands } = this.props;
    const { sliderSize } = this.state;
    const brandLogoURLs = brands.map(brand => brand.imageURL);

    window.addEventListener('resize', () => {
      this.handleSliderSizeChange();
    });

    return (
      <div className='container'>
        <div className={styles.root}>
          <div className='row'>
            <div
              ref={ref => (this.sliderContainer = ref)}
              className={styles.sliderContainer}
            >
              <Slider
                imagesURLs={brandLogoURLs}
                imageWidth={140}
                imageHeight={90}
                thumbnailsInRow={Math.floor(sliderSize / (134 + 15))}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
