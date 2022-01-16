import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';

import styles from './CompareBar.module.scss';
import ProductImage from '../../common/ProductImage/ProductImage';

const CompareBar = props => {
  const { products, assignCompare } = props;

  if (products.filter(product => product.compare).length > 0) {
    return (
      <div className={styles.root}>
        <div className={styles.images}>
          {products.map(product =>
            product.compare ? (
              <ProductImage
                key={product.id}
                id={product.id}
                name={product.name}
                compare={product.compare}
                imageURL={product.image}
                assignCompare={assignCompare}
              />
            ) : null
          )}
        </div>
        <div className={styles.button}>
          <Button variant={'outline'}>COMPARE</Button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

CompareBar.propTypes = {
  products: PropTypes.array,
  assignCompare: PropTypes.func,
};

export default CompareBar;
