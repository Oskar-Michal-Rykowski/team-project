import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import styles from './Ad.module.scss';

const Ad = props => {
  const ad = props.advertisement;
  const bigPanelName = 'big';
  const smallTopName = 'small top';
  const smallBottomName = 'small bottom';
  const bigPanel = ad.filter(item => item.panel === bigPanelName)[0];
  const smallTop = ad.filter(item => item.panel === smallTopName)[0];
  const smallBottom = ad.filter(item => item.panel === smallBottomName)[0];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row ' + styles.panel}>
          <div className={'col ' + styles.bigPanel}>
            <img className={styles.photo} src='/images/sofa.jpeg' alt='sofa' />
            <div className={styles.bigPanelContent}>
              <div className={styles.bigText}>
                <div>
                  <h2>{bigPanel.header}</h2>
                </div>
                <div>
                  <h1>
                    <span>{bigPanel.description}</span>
                  </h1>
                </div>
                <div className={styles.border}>
                  <h2>{bigPanel.discount}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={'col ' + styles.smallPanel}>
            <div className={styles.smallPanelTop}>
              <div className={styles.photo2}>
                <img src='/images/fotel1.png' alt='throne' />
              </div>
              <div className={styles.smallPanelTop__Text}>
                <div>
                  <h4>{ReactHtmlParser(smallTop.header)}</h4>
                </div>
                <div>
                  <h6>{smallTop.description}</h6>
                </div>
                <div className={styles.color}>
                  <h3>{smallTop.discount}</h3>
                </div>
              </div>
              <div className={styles.photo2}>
                <img src='/images/fotel2.png' alt='game-chair' />
              </div>
            </div>
            <div className={styles.smallPanelBottom}>
              <div className={styles.photo2}>
                <img src='/images/bed.png' alt='bed' />
              </div>
              <div className={styles.smallPanelBottom__Text}>
                <div className={styles.color}>
                  <h5>{ReactHtmlParser(smallBottom.header)}</h5>
                </div>
                <div>{smallBottom.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Ad.propTypes = {
  advertisement: PropTypes.array,
};

export default Ad;
