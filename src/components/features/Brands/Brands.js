import React from 'react';
import PropTypes from 'prop-types';
import Carousel, { consts } from 'react-elastic-carousel';

import styles from './Brands.module.scss';

class Brands extends React.Component {
  arrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '<' : '>';
    return (
      <button onClick={onClick} disabled={isEdge} className={styles.button}>
        {pointer}
      </button>
    );
  }

  viewRender(viewportSize) {
    let productsAmount = 6;
    let breakPoint = [];
    breakPoint[0] = {};

    const smallSize = 'mobile';
    const mediumSize = 'tablet';
    const desctop = 'desctop';

    if (viewportSize === smallSize) {
      productsAmount = 3;
      breakPoint[0].width = 768;
      breakPoint[0].itemsToShow = productsAmount;
      breakPoint[0].itemsToScroll = productsAmount;
    } else if (viewportSize === mediumSize) {
      productsAmount = 4;
      breakPoint[0].width = 768;
      breakPoint[0].itemsToShow = productsAmount;
      breakPoint[0].itemsToScroll = productsAmount;
    } else if (viewportSize === desctop) {
      productsAmount = 6;
      breakPoint[0].width = 992;
      breakPoint[0].itemsToShow = productsAmount;
      breakPoint[0].itemsToScroll = productsAmount;
    }
    return breakPoint;
  }

  render() {
    const { brands, viewportSize } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.line}></div>
          <div className={styles.brandContainer}>
            <Carousel
              breakPoints={this.viewRender(viewportSize)}
              pagination={false}
              enableSwipe={false}
              renderArrow={this.arrow}
            >
              {brands.map(item => (
                <div key={item.id} className={styles.logo}>
                  <img src={item.logo} alt='logo firmowe' />
                </div>
              ))}
            </Carousel>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
    );
  }
}

Brands.defaulProps = {
  viewportSize: '',
};
Brands.propTypes = {
  brands: PropTypes.array,
  viewportSize: PropTypes.string.isRequired,
};

export default Brands;
