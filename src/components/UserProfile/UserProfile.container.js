import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import UserProfile from './UserProfile';

const mapStateToProps = (state) => {
  console.log('inside const mapStateToProps = (state) => {');
  console.log(state);
  return ({
    profile: selectors.profile(state)
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoadUserFullProfile: actions.fetchUserFullProfile
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
