import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css';

class UserProfile extends React.Component {
  componentDidMount() {
    const { profile = {}, onLoadUserFullProfile } = this.props;

    if (!profile.isFull) {
      onLoadUserFullProfile();
    }
  }

  render() {
    return (
      <div className="profile">
        <h3>Profile</h3>
        <div className="profile-content">
          <div className="profile-row">
            username: input for username
          </div>
          <div className="profile-row">
            password: input for password
          </div>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  onLoadUserFullProfile: PropTypes.func.isRequired
};

export default UserProfile;
