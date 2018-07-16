import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import Navbar from './Navbar';

const mapStateToProps = (state) => ({
  isLoggedIn: selectors.isLoggedIn(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLogout: actions.logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
