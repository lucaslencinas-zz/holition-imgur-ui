import React from 'react';
import PropTypes from 'prop-types';
import './UserImages.css';
import Grid from '../Grid';

class UserImages extends React.Component {
  componentDidMount() {
    const { userImages = [], onLoadUserImages } = this.props;

    if (userImages.length === 0) {
      onLoadUserImages();
    }
  }

  render() {
    const { userImages } = this.props;
    return (
      <div className="images">
        <h1>My Images</h1>
        <Grid images={userImages} />
      </div>
    );
  }
}

UserImages.propTypes = {
  userImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadUserImages: PropTypes.func.isRequired
};

export default UserImages;
