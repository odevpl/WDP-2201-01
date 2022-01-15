import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductImage.module.scss';

const ProductImage = ({ id, name, compare, imageURL, assignCompare }) => {
  const removeFromBar = event => {
    event.preventDefault();
    assignCompare({ id: id, compare: false });
  };

  return (
    <div key={id} className={styles.image}>
      <img src={imageURL} alt={name} />
      <div className={styles.cancel}>
        <FontAwesomeIcon
          onClick={removeFromBar}
          className={styles.icon}
          icon={faWindowClose}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

ProductImage.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  compare: PropTypes.bool,
  imageURL: PropTypes.string,
  assignCompare: PropTypes.func,
};

export default ProductImage;
