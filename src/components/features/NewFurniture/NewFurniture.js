import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import * as _ from 'lodash';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import CompareBar from '../CompareBar/CompareBarContainer';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    rwdMode: 'desktop',
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
    });
  }

  handleChangeIndex = activePage => {
    this.setState({
      activePage,
    });
  };

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { categories, products, assignFavourite, assignCompare } = this.props;
    const { activeCategory, activePage, rwdMode } = this.state;

    const productsPerPage = () =>
      (rwdMode === 'desktop' && 8) ||
      (rwdMode === 'tablet' && 6) ||
      (rwdMode === 'mobile' && 1);

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const renderProductsArr = _.chunk(categoryProducts, productsPerPage());
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage());
    const actions = { assignFavourite, assignCompare };

    const getCompareProductAmount = () =>
      products.filter(product => product.compare).length;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={`dot-${i}`}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col col-12 col-md-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={
                  'col-auto ' + (rwdMode === 'mobile' ? styles.noDots : styles.dots)
                }
              >
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <SwipeableViews
            index={activePage}
            onChangeIndex={this.handleChangeIndex}
            enableMouseEvents
          >
            {renderProductsArr.map((renderProducts, index) => (
              <div key={`swipe-${index}`} className='row '>
                {renderProducts.map(item => (
                  <div key={item.id} className='col col-12 col-md-4 col-lg-3'>
                    <ProductBox
                      {...item}
                      actions={actions}
                      compareAmount={getCompareProductAmount()}
                    />
                  </div>
                ))}
              </div>
            ))}
          </SwipeableViews>
          <div className='row'>
            <CompareBar />
          </div>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  assignFavourite: PropTypes.func,
  assignCompare: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
