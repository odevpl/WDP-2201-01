import React from 'react';
import styles from './HotDeals.module.scss';
import initialState from '../../../redux/initialState';

import HotDealsProductBox from '../../common/HotDealsProductBox/HotDealsProductBox';

const HotDeals = () => (
  <div className='container'>
    <div className={styles.root}>
      <div className={`'row align-items-center' ${styles.sectionsContainer}`}>
        <div className={`col-4`}>
          <div className={`${styles.photo} `}>
            <HotDealsProductBox id={initialState.hotDeals.products[0]} />
            {/* <HotDealsProductBox />
            <HotDealsProductBox /> */}
          </div>
        </div>
        <div className={`col-8`}>
          <div className={`${styles.photo} ${styles.rightElement}`}>
            <div className={styles.hotDealsOverlay}>
              <div>
                <p className={styles.textFirstline}>
                  {initialState.hotDeals.textFirstWord}
                  <b>{initialState.hotDeals.textSecondWord}</b>
                </p>
                <p className={styles.textSecondline}>
                  {initialState.hotDeals.textSecondline}
                </p>
              </div>
              <button type='button' className={styles.buttonShopNow}>
                SHOP NOW!
              </button>
            </div>
            <img src={initialState.hotDeals.pictureRight} alt='living room' />
          </div>
          <div className={styles.buttonsContainer}>
            <div className={styles.button}>
              <div className={styles.buttonText}>&#60;</div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonText}>&#62;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HotDeals;
