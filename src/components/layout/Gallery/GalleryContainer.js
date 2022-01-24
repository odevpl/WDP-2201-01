import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getNew } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getNew(state),
});

export default connect(mapStateToProps)(Gallery);
