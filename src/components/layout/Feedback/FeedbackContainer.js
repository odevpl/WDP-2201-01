import { connect } from 'react-redux';

import Feedback from './Feedback';
import { getAll } from '../../../redux/feedbackRedux.js';

const mapStateToProps = state => ({
  reviews: getAll(state),
});

export default connect(mapStateToProps)(Feedback);
