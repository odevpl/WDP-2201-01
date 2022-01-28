import React from 'react';
import PropTypes from 'prop-types';
import Slider from '../../features/Slider/Slider';

import styles from './Brands.module.scss';

const Brands = ({ brands }) => {
  const brandLogoURLs = brands.map(brand => brand.imageURL);

  return (
    <div className='container'>
      <div className={styles.root}>
        <div className='row justify-content'>
          <Slider imagesURLs={brandLogoURLs} />
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
