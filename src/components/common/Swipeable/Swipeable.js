import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

class Swipeable extends React.Component {
  handleChangeIndex = index => {
    this.props.onIndexChange(index);
  };

  render() {
    const { activePage, tab } = this.props;
    return (
      <SwipeableViews
        index={activePage}
        onChangeIndex={this.handleChangeIndex}
        enableMouseEvents={true}
      >
        {tab.map(item => (
          <div key={item.index}>{item.content}</div>
        ))}
      </SwipeableViews>
    );
  }
}
Swipeable.defaultProps = {
  tab: [],
};

Swipeable.propTypes = {
  activePage: PropTypes.number,
  onIndexChange: PropTypes.func,
  tab: PropTypes.array.isRequired,
};

export default Swipeable;
