import MainLayout from './MainLayout';
import { connect } from 'react-redux';

import { changeDevice, getSize } from '../../../redux/deviceRedux';

const mapStateToProps = state => ({
  deviceFromContainer: getSize(state),
});
const mapDispatchToProps = dispatch => ({
  changeDevice: device => dispatch(changeDevice(device)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
