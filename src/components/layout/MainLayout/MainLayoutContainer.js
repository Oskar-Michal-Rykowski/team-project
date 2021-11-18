import { connect } from 'react-redux';

import MainLayout from './MainLayout';

import { setViewportWidth } from '../../../redux/viewportResizeRedux.js';

const mapStateToProps = state => ({
  setViewportWidth: setViewportWidth(state),
});

const mapDispatchToProps = dispatch => ({
  setViewportWidth: viewportWidth => dispatch(setViewportWidth(viewportWidth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
