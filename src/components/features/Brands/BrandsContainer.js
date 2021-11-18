import { connect } from 'react-redux';

import Brands from './Brands';

import { getAll } from '../../../redux/brandsRedux';
import { getViewportWidth } from '../../../redux/viewportResizeRedux';

const mapStateToProps = state => ({
  brands: getAll(state),
  viewportSize: getViewportWidth(state),
});

export default connect(mapStateToProps)(Brands);
