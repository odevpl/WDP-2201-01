import { connect } from 'react-redux';

import Stars from './Stars';

import { selectProductById, assignUserStars } from '../../../redux/productsRedux.js';

const mapStateToProps = (state, props) => ({
  product: selectProductById(state, props.productId),
});

const mapDispatchToProps = dispatch => ({
  assignUserStars: payload => dispatch(assignUserStars(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
