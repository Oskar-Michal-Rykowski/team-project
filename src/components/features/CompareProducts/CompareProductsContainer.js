import { connect } from 'react-redux';

import CompareProducts from './CompareProducts';

import { getCompareProducts, setCompare } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getCompareProducts(state),
  setCompare: setCompare,
});

const mapDispatchToProps = dispatch => ({
  setCompare: (boolean, id) => dispatch(setCompare(boolean, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareProducts);
