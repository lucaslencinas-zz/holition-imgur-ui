import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import UserProfile from './UserProfile';

const mapStateToProps = (state) => ({
  profile: selectors.profile(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoadUserProfile: actions.fetchUserProfile
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
