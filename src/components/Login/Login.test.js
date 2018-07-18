import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  let onLogin;
  let login;

  beforeEach(() => {
    onLogin = sinon.spy();
    login = shallow(<Login onLogin={onLogin} />);
  });

  it('Displays title correctly', () => {
    const loginTitle = login.find('h1').text();

    expect(loginTitle).to.equal('Login');
  });

  it('Displays the username and password fields', () => {
    const usernameLabel = login.find('label').at(0).text();
    const passwordLabel = login.find('label').at(1).text();

    expect(usernameLabel).to.equal('Username:');
    expect(passwordLabel).to.equal('Password:');
  });

  describe('when interacting', () => {
    describe('when entering username and password', () => {
      beforeEach(() => {
        login.find('input').at(0).simulate('change', { target: { value: 'lucas' } });
        login.find('input').at(1).simulate('change', { target: { value: 'lucas123' } });
      });

      it('sets the components state', () => {
        expect(login.state('username')).to.eql('lucas');
        expect(login.state('password')).to.eql('lucas123');
      });

      describe('and clicking login', () => {
        beforeEach(() => {
          login.find('button').at(1).simulate('click');
        });

        it('should call the onLogin function with username and password', () => {
          expect(onLogin.calledWith({ username: 'lucas', password: 'lucas123' })).to.eql(true);
        });
      });
    });
  });
});
