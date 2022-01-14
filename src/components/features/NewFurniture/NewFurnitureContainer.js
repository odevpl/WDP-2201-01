import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import {
  getNew,
  assignFavourite,
  assignCompare,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  assignFavourite: payload => dispatch(assignFavourite(payload)),
  assignCompare: payload => dispatch(assignCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
