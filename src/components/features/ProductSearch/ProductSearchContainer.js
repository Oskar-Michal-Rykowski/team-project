import { connect } from 'react-redux';

import ProductSearch from './ProductSearch';

import { getAll } from '../../../redux/categoriesRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
});

export default connect(mapStateToProps)(ProductSearch);
