import React from 'react';
import PropTypes from 'prop-types';

import styles from './CompareProducts.module.scss';
import Button from '../../common/Button/Button';

const CompareProducts = ({ products, setCompare }) => {
  const compareProducts = [];

  for (let product of products) {
    if (product.isCompare) {
      compareProducts.push({ image: product.image, id: product.id });
    }
  }

  function getProductImage(index) {
    const imageOldPathFromState = compareProducts[index].image;
    const imageNewPath = '/../..' + imageOldPathFromState;
    return imageNewPath;
  }

  function getVariant(position) {
    if (position < compareProducts.length) {
      const productId = compareProducts[position].id;
      return (
        <div className={styles.image}>
          <img src={getProductImage(position)} alt='product'></img>
          <button
            onClick={e => {
              e.preventDefault();
              setCompare(false, productId);
            }}
            id={`remove-compare-product-${position}`}
          >
            X
          </button>
        </div>
      );
    } else {
      return <div className={styles.blank}>+</div>;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.products}>
          {[0, 1, 2, 3].map(position => getVariant(position))}
          <Button variant='active' className={styles.compare}>
            COMPARE
          </Button>
        </div>
      </div>
    </div>
  );
};

CompareProducts.propTypes = {
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
  setCompare: PropTypes.func,
};
export default CompareProducts;
