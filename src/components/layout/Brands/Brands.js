import React from 'react';
import styles from './Brands.module.scss';

const Brands = () => (
  <div className='container'>
    <div className={styles.root}>
      <div className='row justify-content'>
        <div className={styles.button}>
          <p>&#60;</p>
        </div>
        <div className={`row justify-content-around ${styles.brandsImagesContainer}`}>
          <div className={`col-1 ${styles.logoContainer}`}>
            <img src='/images/logo/logo1.jpg' alt='logo' />
          </div>
          <div className={`col-1 ${styles.logoContainer}`}>
            <img src='/images/logo/logo1.jpg' alt='logo' />
          </div>
          <div className={`col-1 ${styles.logoContainer}`}>
            <img src='/images/logo/logo1.jpg' alt='logo' />
          </div>
          <div className={`col-1 ${styles.logoContainer}`}>
            <img src='/images/logo/logo1.jpg' alt='logo' />
          </div>
          <div className={`col-1 ${styles.logoContainer}`}>
            <img src='/images/logo/logo1.jpg' alt='logo' />
          </div>
          <div className={`col-1 ${styles.logoContainer}`}>
            <img src='/images/logo/logo1.jpg' alt='logo' />
          </div>
        </div>
        <div className={styles.button}>
          <p>&#62;</p>
        </div>
      </div>
    </div>
  </div>
);
export default Brands;
