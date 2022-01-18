import React from 'react';
import styles from './Promotion.module.scss';

const Promotion = () => (
  <div className='container'>
    <div className={styles.root}>
      <div className='row align-items-center'>
        <div className={`col-6 ${styles.noPadding} `}>
          <div className={`${styles.photo} ${styles.vertical}  ${styles.paddingRight}`}>
            <img src='/images/promotion/fotel.jpg' alt='armchair' />
          </div>
        </div>
        <div className={`col-6 ${styles.noPadding} `}>
          <div
            className={`${styles.photo} ${styles.horizontal} ${styles.paddingBottom}`}
          >
            <img src='/images/promotion/sofa.jpg' alt='sofa' />
          </div>
          <div className={`${styles.photo} ${styles.horizontal} ${styles.paddingTop}`}>
            <img src='/images/promotion/kredens.jpg' alt='cupboard' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Promotion;
