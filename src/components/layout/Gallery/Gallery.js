import React from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from '../../../utils/currencyFormatter';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import Slider from '../../features/Slider/Slider';

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

    const productsImagesURLs = products.map(product => product.image);

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
        title: 'Add to Watched',
      },
    ];

    const mainImageId = 'aenean-ru-bristique-16';
    const selectedProduct = products.find(product => (product.id = mainImageId));
    const mainImageSource = selectedProduct.image;
    const mainImageAlt = selectedProduct.name;
    const mainPrice = currencyFormatter.format(selectedProduct.price);

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
              <div className={styles.navTabs}>
                <ul>
                  {['feature', 'top_seller', 'sale_off', 'top_rated'].map(element => (
                    <li
                      key={element}
                      className={
                        activeTab === element
                          ? `${styles.navLink} ${styles.activeLink}`
                          : `${styles.navLink}`
                      }
                    >
                      <a
                        onClick={event => this.handleTabChange(event, element)}
                        href='#'
                      >
                        {element.replace('_', ' ')}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.tabContent}>
                <div className={styles.buttons}>
                  {tabButtons.map(button => (
                    <div key={button.id} className={styles.buttonContainer}>
                      <Button
                        className={styles.button}
                        type='button'
                        variant={'outline'}
                      >
                        <FontAwesomeIcon icon={button.icon}></FontAwesomeIcon>
                      </Button>
                      <div className={styles.tooltip}>
                        <span>{button.title}</span>
                      </div>
                      <div className={styles.arrow}></div>
                    </div>
                  ))}
                </div>
                <img
                  className={styles.tabImage}
                  src={activeTabImage[activeTab]}
                  alt={activeTab.replace('_', ' ') + ' furniture'}
                />
              </div>
              <Slider imagesURLs={productsImagesURLs} />
            </div>
            <div className={'col-6 ' + styles.rightPanel}>
              <div className={styles.items}>
                <p className={styles.text}>
                  FROM
                  <span className={styles.price}>{mainPrice}</span>
                </p>
                <p className={styles.title}>Bedroom Bed</p>
                <Button variant='bigGreen'>Shop now</Button>
              </div>
              <img
                className={styles.mainImage}
                src={mainImageSource}
                alt={mainImageAlt}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
