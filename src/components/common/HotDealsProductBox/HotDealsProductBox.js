import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDealsProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import initialState from '../../../redux/initialState';

const HotDealsProductBox = ({ id, actions, compareAmount }) => {
  const renderedProduct = initialState.products.filter(product => id === product.id)[0];

  const changeFavouriteState = event => {
    event.preventDefault();
    actions.assignFavourite({ id: id, favourite: !renderedProduct.favourite });
  };

  const changeCompareState = event => {
    event.preventDefault();
    if (compareAmount < 4 || renderedProduct.compare) {
      actions.assignCompare({ id: id, compare: !renderedProduct.compare });
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.leftContainer}>
        <div className={styles.leftContainerHeader}>
          <div className={styles.title}>
            <p>HOT DEALS</p>
          </div>
          <div className={styles.dots}>
            <ul>
              <li>
                <a href='#' className={styles.dot}></a>
              </li>
              <li>
                <a href='#' className={styles.dot}></a>
              </li>
              <li>
                <a href='#' className={styles.dot}></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.photo}>
          <img src={initialState.hotDeals.pictureLeft} alt='bed_photo' />
          <div className={styles.buttons}>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
        <div className={styles.counterContainer}>
          <div className={styles.counterDot}>
            <p className={styles.counterNo}>25</p>
            <p className={styles.descriptiopn}>days</p>
          </div>
          <div className={styles.counterDot}>
            <p className={styles.counterNo}>10</p>
            <p className={styles.descriptiopn}>hours</p>
          </div>
          <div className={styles.counterDot}>
            <p className={styles.counterNo}>45</p>
            <p className={styles.descriptiopn}>mins</p>
          </div>
          <div className={styles.counterDot}>
            <p className={styles.counterNo}>30</p>
            <p className={styles.descriptiopn}>secs</p>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{renderedProduct.name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= renderedProduct.stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button
              type='button'
              variant={renderedProduct.watch ? 'outline-active' : 'outline'}
            >
              <FontAwesomeIcon icon={faEye}>Watch</FontAwesomeIcon>
            </Button>
            <Button
              type='button'
              onClick={changeFavouriteState}
              variant={renderedProduct.favourite ? 'outline-active' : 'outline'}
            >
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button
              type='button'
              onClick={changeCompareState}
              variant={renderedProduct.compare ? 'outline-active' : 'outline'}
            >
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.price}>
            <div className={styles.basePrice}>{renderedProduct.basePrice}</div>
            <Button noHover variant='small'>
              $ {renderedProduct.price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

HotDealsProductBox.propTypes = {
  id: PropTypes.string,
  basePrice: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  compare: PropTypes.bool,
  favourite: PropTypes.bool,
  actions: PropTypes.object,
  compareAmount: PropTypes.number,
};

export default HotDealsProductBox;
