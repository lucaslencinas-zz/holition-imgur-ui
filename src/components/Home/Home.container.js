import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import Home from './Home';

const mapStateToProps = (state) => ({
  images: selectors.images(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoadImages: actions.fetchImages
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
