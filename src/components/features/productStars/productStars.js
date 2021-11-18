import React from 'react';
import PropTypes from 'prop-types';

import styles from './productStars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ProductStars = ({ id, stars, clientStars, setStars }) => {
  const [hoverStars, setHoverStars] = React.useState(0);

  function handleStars(e, id, i) {
    e.preventDefault();
    setStars(i, id);
  }

  function changeStar(stars, clientStars, hoverStars) {
    if (!isNaN(hoverStars) && hoverStars !== 0) {
      return hoverStars;
    } else if (!isNaN(clientStars)) {
      return clientStars;
    } else {
      return stars;
    }
  }

  return (
    <div className={clientStars ? styles.clientStars : styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          onMouseEnter={() => setHoverStars(i)}
          onMouseLeave={() => setHoverStars(changeStar(stars, clientStars))}
          onClick={e => handleStars(e, id, i)}
          key={i}
          href='#'
        >
          {i <= changeStar(stars, clientStars, hoverStars) ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

ProductStars.propTypes = {
  stars: PropTypes.number,
  clientStars: PropTypes.number,
  setStars: PropTypes.func,
  id: PropTypes.string,
};

export default ProductStars;
