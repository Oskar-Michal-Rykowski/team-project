import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import styles from './ClientFeedback.module.scss';

class ClientFeedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange = newPage => {
    this.setState({ activePage: newPage });
  };

  render() {
    const { feedback } = this.props;
    const { activePage } = this.state;
    const dots = [];
    for (let i = 0; i < 3; i++) {
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
              <div className={'col ' + styles.heading}>
                <h3>Clients Feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className={styles.feedback}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
              <div className={styles.quote}>
                <p>{feedback[0].quote}</p>
              </div>
              <div className={styles.person}>
                <img
                  className={styles.photo}
                  src={feedback[0].photo}
                  alt={feedback[0].name}
                ></img>
                <div className={styles.details}>
                  <h4>{feedback[0].name}</h4>
                  <h6>{feedback[0].position}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ClientFeedback.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.string,
      photo: PropTypes.string,
      quote: PropTypes.string,
    })
  ),
};

ClientFeedback.defaultProps = {
  feedback: [],
};

export default ClientFeedback;
