import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="navbar-home-link">
      Holition Imgur
    </Link>
  </div>
);

export default Navbar;
