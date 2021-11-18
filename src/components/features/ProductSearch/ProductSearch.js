import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = ({ categories }) => {
  const [selectCategory, setSelectCategory] = React.useState('Select a category');

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <div>
          <ul className={styles.searchMenu}>
            <li>
              {selectCategory}
              <ul>
                {(categories || categories === []) &&
                  categories.map(category => (
                    <li
                      key={category.id}
                      value={category.id}
                      onClick={() => setSelectCategory(category.name)}
                    >
                      {category.name}
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
};

export default ProductSearch;
