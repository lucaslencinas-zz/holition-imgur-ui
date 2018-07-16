import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css';

class UserProfile extends React.Component {
  componentDidMount() {
    const { profile = {}, onLoadUserProfile } = this.props;

    if (!profile.isFull) {
      onLoadUserProfile();
    }
  }

  render() {
    const { profile } = this.props;
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="profile-content">
          <div className="profile-row">
            <span><b>Username:</b></span>
            <span>{profile.username}</span>
          </div>
          <div className="profile-row">
            <span><b>Password:</b></span>
            <span>{profile.password}</span>
          </div>
          <div className="profile-row">
            <span><b>Name:</b></span>
            <span>{profile.name}</span>
          </div>
          <div className="profile-row">
            <span><b>Age:</b></span>
            <span>{profile.age}</span>
          </div>
          <div className="profile-row">
            <span><b>Gender:</b></span>
            <span>{profile.gender}</span>
          </div>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  onLoadUserProfile: PropTypes.func.isRequired
};

export default UserProfile;
