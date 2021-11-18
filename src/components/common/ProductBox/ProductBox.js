import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductStars from '../../features/productStars/productStars';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  isFavorite,
  isCompare,
  setFavorite,
  id,
  image,
  clientStars,
  setStars,
  setCompare,
}) => {
  function toggleBoolean(boolean) {
    return !boolean;
  }
  function getVariant(status) {
    if (status === true || status === true) {
      return 'active';
    } else return 'outline';
  }
  function toPriceFormat(price) {
    if (isNaN(price)) {
      return '';
    } else {
      return price.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: '2',
        maxFractionDigits: '2',
      });
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div>
          <img src={image} alt={name} />
        </div>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <ProductStars
          stars={stars}
          clientStars={clientStars}
          setStars={setStars}
          id={id}
        ></ProductStars>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            onClick={e => {
              e.preventDefault();
              setFavorite(toggleBoolean(isFavorite), id);
            }}
            variant={getVariant(isFavorite)}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            onClick={e => {
              e.preventDefault();
              setCompare(toggleBoolean(isCompare), id);
            }}
            variant={getVariant(isCompare)}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.priceContainer}>
          <div>
            {promo === 'sale' && (
              <div className={styles.oldPrice}>{toPriceFormat(price)}</div>
            )}
          </div>
          <div className={styles.price}>
            <Button noHover hoverParent variant='small'>
              {toPriceFormat(price)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  setFavorite: PropTypes.func,
  id: PropTypes.string,
  image: PropTypes.string,
  clientStars: PropTypes.number,
  setStars: PropTypes.func,
  setCompare: PropTypes.func,
};

export default ProductBox;
