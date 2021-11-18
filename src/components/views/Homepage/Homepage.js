import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareProducts from '../../features/CompareProducts/CompareProductsContainer';
import Ad from '../../features/Ad/AdContainer';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Ad />
    <NewFurniture />
    <Brands />
    <CompareProducts />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
