import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../domains';
import Login from './Login';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLogin: actions.login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
