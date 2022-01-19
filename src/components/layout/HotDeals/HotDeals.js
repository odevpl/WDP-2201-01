import React from 'react';
import styles from './HotDeals.module.scss';
import initialState from '../../../redux/initialState';

const HotDeals = () => (
  <div className='container'>
    <div className={styles.root}>
      <div className={`'row align-items-center' ${styles.sectionsContainer}`}>
        <div className={`col-4`}>
          <div className={`${styles.photo} `}>
            <img src={initialState.hotDeals.pictureLeft} alt='white armchair' />
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
              <p>&#60;</p>
            </div>
            <div className={styles.button}>
              <p>&#62;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HotDeals;
