import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import UserImages from './UserImages';

const mapStateToProps = (state) => ({
  userImages: selectors.userImages(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoadUserImages: actions.fetchUserImages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserImages);
