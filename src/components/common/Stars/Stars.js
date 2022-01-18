import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class Stars extends React.Component {
  static propTypes = {
    product: PropTypes.object,
    id: PropTypes.string,
    stars: PropTypes.number,
    userStars: PropTypes.number,
    assignUserStars: PropTypes.func,
    starsHoverAmount: PropTypes.number,
  };

  state = {
    starsHoverAmount: this.props.starsHoverAmount || 0,
  };

  render() {
    const { id, stars, userStars } = this.props.product;
    const { starsHoverAmount } = this.state;

    const setUserStars = (event, i) => {
      event.preventDefault();
      this.props.assignUserStars({ id: id, userStars: i });
    };

    const setHoverStars = (event, i) => {
      event.preventDefault();
      this.setState(() => ({ starsHoverAmount: i }));
    };

    const renderStar = i => {
      if (starsHoverAmount === 0) {
        if ((userStars === 0 && i <= stars) || (userStars !== 0 && i <= userStars)) {
          return renderFullStar(i);
        } else {
          return renderEmptyStar(i);
        }
      } else {
        if (i <= starsHoverAmount) {
          return renderFullStar(i);
        } else {
          return renderEmptyStar(i);
        }
      }
    };

    const renderFullStar = i => (
      <FontAwesomeIcon
        className={userStars !== 0 || starsHoverAmount !== 0 ? styles.user : ''}
        icon={faStar}
      >
        {i} stars
      </FontAwesomeIcon>
    );

    const renderEmptyStar = i => (
      <FontAwesomeIcon className={userStars !== 0 ? styles.user : ''} icon={farStar}>
        {i} stars
      </FontAwesomeIcon>
    );

    return (
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a
            key={i}
            href='#'
            onClick={event => setUserStars(event, i)}
            onMouseEnter={event => setHoverStars(event, i)}
            onMouseLeave={event => setHoverStars(event, 0)}
            className={styles.starHover}
          >
            {renderStar(i)}
          </a>
        ))}
      </div>
    );
  }
}

export default Stars;
