import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import Promotion from '../../layout/Promotion/Promotion';
import HotDeals from '../../layout/HotDeals/HotDeals';
import Brands from '../../layout/Brands/Brands';

const Homepage = () => (
  <div className={styles.root}>
    <HotDeals />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Feedback />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
