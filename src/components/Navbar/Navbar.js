import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  let buttons;
  if (isLoggedIn) {
    buttons = (
      <div className="user-buttons">
        <Link to="/user/images">Images</Link>
        <Link to="/user/profile">Profile</Link>
      </div>
    );
  }
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">Holition Imgur</Link>
        {buttons}
      </div>
      <div>
        {isLoggedIn ?
          <button onClick={onLogout} data-test-id="logout-button">Logout</button> :
          <Link data-test-id="login-button" to="/login">Login</Link>
        }
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default Navbar;
