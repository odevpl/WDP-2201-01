import { connect } from 'react-redux';

import CompareBar from './CompareBar';

import { getNew, assignCompare } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  assignCompare: payload => dispatch(assignCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareBar);
