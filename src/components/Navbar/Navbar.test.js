import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let navbar;
  let onLogout;

  describe('when the user is logged in', () => {
    beforeEach(() => {
      onLogout = sinon.spy();
      navbar = shallow(<Navbar isLoggedIn onLogout={onLogout} />);
    });

    it('Displays home Link correctly', () => {
      const navbarText = navbar.find('Link').at(0).children().text();

      expect(navbarText).to.equal('Holition Imgur');
    });
    it('Displays the buttons on the left', () => {
      const leftButtons = navbar.find('[className="left"] Link');

      expect(leftButtons.length).to.eql(3);
    });

    it('Displays the button to log out', () => {
      const logoutButton = navbar.find('[data-test-id="logout-button"]');

      expect(logoutButton.exists()).to.eql(true);
    });
  });

  describe('when the user is NOT logged in', () => {
    beforeEach(() => {
      onLogout = sinon.spy();
      navbar = shallow(<Navbar isLoggedIn={false} onLogout={onLogout} />);
    });

    it('Displays home Link correctly', () => {
      const navbarText = navbar.find('Link').at(0).children().text();

      expect(navbarText).to.equal('Holition Imgur');
    });
    it('Only display the home link on the left', () => {
      const leftButtons = navbar.find('[className="left"] Link');

      expect(leftButtons.length).to.eql(1);
    });

    it('Displays the button to log in', () => {
      const loginButton = navbar.find('[data-test-id="login-button"]');

      expect(loginButton.exists()).to.eql(true);
    });
  });
});
