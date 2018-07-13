import React from 'react';
import './Login.css';

const Login = () => (
  <div className="login">
    <h3>Login</h3>
    <div className="login-form">
      <div className="form-row">
        username: input for username
      </div>
      <div className="form-row">
        password: input for password
      </div>
      <div className="form-buttons">
        <div className="button">
          Cancel - Link
        </div>
        <div className="button">
          Login - Button
        </div>
      </div>
    </div>
  </div>
);

export default Login;
