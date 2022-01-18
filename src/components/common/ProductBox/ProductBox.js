import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Stars from '../Stars/StarsContainer';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  image,
  favourite,
  compare,
  basePrice,
  actions,
  compareAmount,
}) => {
  const changeFavouriteState = event => {
    event.preventDefault();
    actions.assignFavourite({ id: id, favourite: !favourite });
  };

  const changeCompareState = event => {
    event.preventDefault();
    if (compareAmount < 4 || compare) {
      actions.assignCompare({ id: id, compare: !compare });
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt='bed_photo' />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <Stars productId={id} />
      </div>
      r<div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            type='button'
            onClick={changeFavouriteState}
            variant={favourite ? 'outline-active' : 'outline'}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            type='button'
            onClick={changeCompareState}
            variant={compare ? 'outline-active' : 'outline'}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <div className={styles.basePrice}>{basePrice}</div>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  basePrice: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  compare: PropTypes.bool,
  favourite: PropTypes.bool,
  actions: PropTypes.object,
  compareAmount: PropTypes.number,
};

export default ProductBox;
