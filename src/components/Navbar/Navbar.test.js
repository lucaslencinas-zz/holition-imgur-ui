import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('Displays text correctly', () => {
    const navbar = shallow(<Navbar />);
    const navbarText = navbar.find('[className="navbar-home-link"]').children().text();

    expect(navbarText).to.equal('Holition Imgur');
  });
});
