import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('Displays title correctly', () => {
    const navbar = shallow(<Login />);
    const navbarText = navbar.find('h3').text();

    expect(navbarText).to.equal('Login');
  });
});
