import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserProfile from './UserProfile';

const userProfile = {
  name: 'Lucas',
  username: 'lucas',
  age: 25,
  gender: 'male',
  password: 'lucas123'
};

describe('UserProfile', () => {
  let userProfileComponent;
  let onLoadUserFullProfile;

  describe('When shallowing', () => {
    beforeEach(() => {
      onLoadUserFullProfile = sinon.spy();
      userProfileComponent = shallow((
        <UserProfile onLoadUserFullProfile={onLoadUserFullProfile} profile={userProfile} />
      ));
    });

    it('Renders the elements correctly', () => {
      expect(userProfileComponent.find('h3').text()).to.equal('Profile');
    });
  });
});