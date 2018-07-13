import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import UserImages from '../components/UserImages';

const Router = () => (
  <div>
    <Navbar />
    <main>
      <Route
        exact path="/"
        component={Home}
      />
      <Route
        exact path="/login"
        component={Login}
      />
      <Route
        exact path="/user/profile"
        component={UserProfile}
      />
      <Route
        exact path="/user/images"
        component={UserImages}
      />
    </main>
  </div>
);

export default Router;
