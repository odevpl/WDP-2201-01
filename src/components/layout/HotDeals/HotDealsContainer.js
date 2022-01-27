import { connect } from 'react-redux';

import HotDeals from './HotDeals';

import { getAll, changeImage } from '../../../redux/hotDealsRedux';

const mapStateToProps = state => ({
  hotDeals: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  changeImage: payload => dispatch(changeImage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotDeals);
