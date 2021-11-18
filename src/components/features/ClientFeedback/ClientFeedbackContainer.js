import { connect } from 'react-redux';

import ClientFeedback from './ClientFeedback';

import { getAll } from '../../../redux/feedbackRedux.js';

const mapStateToProps = state => ({
  feedback: getAll(state),
});

export default connect(mapStateToProps)(ClientFeedback);
