import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faEye,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class Gallery extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  state = {
    activeTab: 'feature',
    activeTabImage: {
      feature: this.props.products[0].image,
      top_seller: this.props.products[1].image,
      sale_off: this.props.products[2].image,
      top_rated: this.props.products[3].image,
    },
  };

  handleTabChange(event, newTab) {
    event.preventDefault();
    this.setState({ activeTab: newTab });
  }

  render() {
    const { products } = this.props;
    const { activeTab, activeTabImage } = this.state;

    const tabButtons = [
      {
        id: 'favorite',
        icon: faHeart,
        title: 'Add to Favorite',
      },
      {
        id: 'compare',
        icon: faExchangeAlt,
        title: 'Add to Compare',
      },
      {
        id: 'cart',
        icon: faShoppingBasket,
        title: 'Add to Cart',
      },
      {
        id: 'watch',
        icon: faEye,
        title: 'Add to Watched List',
      },
    ];

    const mainImageId = 'aenean-ru-bristique-16';
    const mainImageSource = products.find(product => (product.id = mainImageId)).image;
    const mainImageAlt = products.find(product => (product.id = mainImageId)).name;
    const mainPrice = products.find(product => (product.id = mainImageId)).price;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className={styles.panelBar}>
                <div className={styles.heading}>
                  <h3>Furniture Gallery</h3>
                </div>
              </div>
              <div className>
                <ul className='nav nav-tabs'>
                  {['feature', 'top_seller', 'sale_off', 'top_rated'].map(element => (
                    <li key={element} className={styles.navLink}>
                      <a
                        className={activeTab === element && styles.activeLink}
                        onClick={event => this.handleTabChange(event, element)}
                        href='#'
                      >
                        {element.replace('_', ' ')}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className='tab-content'>
                  <div className={styles.tabImage}>
                    <div className={styles.buttons}>
                      {tabButtons.map(button => (
                        <Button
                          className={styles.button}
                          key={button.id}
                          type='button'
                          variant={'outline'}
                          data-bs-toggle='tooltip'
                          data-bs-placement='right'
                          title={button.title}
                        >
                          <FontAwesomeIcon icon={button.icon}>
                            {button.title}
                          </FontAwesomeIcon>
                        </Button>
                      ))}
                    </div>
                    <img
                      className={'img-fluid'}
                      src={activeTabImage[activeTab]}
                      alt={activeTab.replace('_', ' ') + ' furniture'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-6 ' + styles.mainImage}>
              <div className={styles.items}>
                <p className={styles.from}>
                  FROM
                  <span className={styles.price}>{mainPrice}</span>
                </p>
                <p className={styles.title}>Bedroom Bed</p>
              </div>
              <img className={'img-fluid'} src={mainImageSource} alt={mainImageAlt} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
