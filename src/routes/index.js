import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';

const Router = () => (
  <div>
    <Navbar />
    <main>
      <Route
        exact path="/"
        component={Home}
      />
    </main>
  </div>
);

export default Router;
