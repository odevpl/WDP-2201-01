import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import styles from './HotDeals.module.scss';

import HotDealsProductBox from '../../common/HotDealsProductBox/HotDealsProductBox';

const HotDeals = ({ hotDeals, changeImage }) => {
  const handleClickLeft = event => {
    event.preventDefault();

    const payload = hotDeals.activeBgImage - 1;
    hotDeals.activeBgImage > 0 && changeImage(payload);
  };

  const handleClickRight = event => {
    event.preventDefault();

    const payload = hotDeals.activeBgImage + 1;
    hotDeals.activeBgImage < hotDeals.promoBgImages.length - 1 && changeImage(payload);
  };

  return (
    <div className='container'>
      <div className={styles.root}>
        <div className={`'row align-items-center' ${styles.sectionsContainer}`}>
          <div className={`col-4 ${styles.hotDealContainer}`}>
            <div className={`${styles.photo} `}>
              <HotDealsProductBox id={hotDeals.products[0]} />
            </div>
          </div>
          <div className={`col-12 col-lg-8`}>
            <div className={`${styles.photo} ${styles.rightElement}`}>
              <div className={styles.hotDealsOverlay}>
                <div>
                  <p className={styles.textFirstline}>
                    {hotDeals.textFirstWord}
                    <b>{hotDeals.textSecondWord}</b>
                  </p>
                  <p className={styles.textSecondline}>{hotDeals.textSecondline}</p>
                </div>
                <button type='button' className={styles.buttonShopNow}>
                  SHOP NOW!
                </button>
              </div>
              <SwipeableViews index={hotDeals.activeBgImage} enableMouseEvents>
                {hotDeals.promoBgImages.map(image => (
                  <img
                    key={image.id}
                    className={styles.promoBgImage}
                    src={image.url}
                    alt={image.id}
                  />
                ))}
              </SwipeableViews>
            </div>
            <div className={styles.buttonsContainer}>
              <div className={styles.button} onClick={event => handleClickLeft(event)}>
                <div className={styles.buttonText}>&#60;</div>
              </div>
              <div className={styles.button} onClick={event => handleClickRight(event)}>
                <div className={styles.buttonText}>&#62;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HotDeals.propTypes = {
  changeImage: PropTypes.func,
  activeBgImage: PropTypes.number,
  hotDeals: PropTypes.object,
};

export default HotDeals;
