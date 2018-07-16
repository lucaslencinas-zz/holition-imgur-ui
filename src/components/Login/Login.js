import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin() {
    const { username, password } = this.state;
    const { onLogin } = this.props;
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername.length > 0 && trimmedPassword.length > 0) {
      onLogin({ username: trimmedUsername, password: trimmedPassword });
    }
  }

  render() {
    const { username, password } = this.state;
    return (
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
                value={username}
                onChange={this.handleUsernameChange}
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
                value={password}
                onChange={this.handlePasswordChange}
              />
            </label>
          </div>
          <div className="form-buttons">
            <div className="button">
              <button>
                <Link to="/">Cancel</Link>
              </button>
            </div>
            <div className="button">
              <button onClick={this.handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;
