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
        <h1>Profile</h1>
        <div className="profile-content">
          <div className="profile-row">
            <span><b>Username:</b></span>
            <span>username</span>
          </div>
          <div className="profile-row">
            <span><b>Password:</b></span>
            <span>password</span>
          </div>
          <div className="profile-row">
            <span><b>Name:</b></span>
            <span>name</span>
          </div>
          <div className="profile-row">
            <span><b>Age:</b></span>
            <span>age</span>
          </div>
          <div className="profile-row">
            <span><b>Gender:</b></span>
            <span>gender</span>
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
