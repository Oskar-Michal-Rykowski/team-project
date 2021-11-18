import { connect } from 'react-redux';

import Ad from './Ad';

import { getAll } from '../../../redux/advertisementRedux.js';

const mapStateToProps = state => ({
  advertisement: getAll(state),
});

export default connect(mapStateToProps)(Ad);
