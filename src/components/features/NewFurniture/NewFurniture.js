import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  handlePageChange = newPage => {
    this.setState({ activePage: newPage });
  };

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  renderSwipeContent(products, pagesCount, viewportSize) {
    let productsAmount = 8;

    const smallSize = 'mobile';
    const mediumSize = 'tablet';

    if (viewportSize === smallSize) {
      productsAmount = 2;
    } else if (viewportSize === mediumSize) {
      productsAmount = 3;
    }

    const tab = [];
    for (let i = 0; i < pagesCount; i++) {
      tab[i] = {};
      tab[i].index = i;
      tab[i].content = (
        <div className={styles.space}>
          <div className={styles.swipePosition}>
            {products.slice(i * productsAmount, (i + 1) * productsAmount).map(item => (
              <div key={item.id} className='col-6 col-sm-6 col-md-4 col-lg-3'>
                <ProductBox {...item} id={item.id} />
              </div>
            ))}
          </div>
        </div>
      );
    }
    return tab;
  }

  render() {
    const { categories, products, viewportSize } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const tabSwipe = this.renderSwipeContent(products, pagesCount, viewportSize);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
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
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <Swipeable
              activePage={activePage}
              onIndexChange={this.handlePageChange}
              tab={tabSwipe}
            ></Swipeable>
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
  viewportSize: PropTypes.string.isRequired,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  viewportSize: '',
};

export default NewFurniture;
