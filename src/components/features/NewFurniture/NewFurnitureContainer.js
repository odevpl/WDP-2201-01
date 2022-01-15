import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, assignFavourite } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  assignFavourite: payload => dispatch(assignFavourite(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
