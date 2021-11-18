import { connect } from 'react-redux';

import { setFavorite, setStars, setCompare } from '../../../redux/productsRedux';

import ProductBox from './ProductBox';

const mapStateToProps = () => ({
  setStars: setStars,
  setCompare: setCompare,
});

const mapDispatchToProps = dispatch => ({
  setFavorite: (boolean, id) => dispatch(setFavorite(boolean, id)),
  setStars: (number, id) => dispatch(setStars(number, id)),
  setCompare: (boolean, id) => dispatch(setCompare(boolean, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
