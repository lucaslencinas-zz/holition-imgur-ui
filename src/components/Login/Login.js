import React from 'react';
import './Login.css';

const Login = () => (
  <div className="login">
    <h1>Login</h1>
    <div className="login-form">
      <div className="form-row">
        <label htmlFor="username">
          Username:
          <input
            placeholder="username"
            type="text"
            id="username"
            onChange={(event) => console.log(event.target.value)}
          />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="password">
          Password:
          <input
            placeholder="password"
            id="password"
            type="password"
            onChange={(event) => console.log(event.target.value)}
          />
        </label>
      </div>
      <div className="form-buttons">
        <div className="button">
          <button>
            <a href="/">Cancel</a>
          </button>
        </div>
        <div className="button">
          <button onClick={() => console.log('login')}>
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
