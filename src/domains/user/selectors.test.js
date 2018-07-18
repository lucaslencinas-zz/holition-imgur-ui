import { expect } from 'chai';
import * as selectors from './selectors';

describe('users selectors', () => {
  let state;
  let user;
  let userImages;

  beforeEach(() => {
    user = {
      name: 'Lencinas',
      username: 'lencinas',
      age: 27,
      gender: 'male',
      authToken: 'some-long-token'
    };

    userImages = [
      {
        imgId: 'some-id123',
        imgUrl: 'https://i.imgur.com/dAtP1da.png',
        username: 'lucas',
        title: 'Some title for some-i123d1',
        isPublic: true
      },
      {
        imgId: 'some-id144',
        imgUrl: 'https://i.imgur.com/LeSQxu2.png',
        username: 'lucas',
        title: 'Some title for some-id1231',
        isPublic: false
      }
    ];

    state = {
      user: {
        profile: user,
        images: userImages
      }
    };
  });

  describe('when the user is logged in', () => {
    describe('profile()', () => {
      it('returns the users profile', () => {
        expect(selectors.profile(state)).to.eql(user);
      });
    });

    describe('isLoggedIn', () => {
      it('returns true ', () => {
        expect(selectors.isLoggedIn(state)).to.eql(true);
      });
    });

    describe('userImages', () => {
      it('returns the user images from the state', () => {
        expect(selectors.userImages(state)).to.eql(userImages);
      });
    });
  });

  describe('when the user is NOT logged in', () => {
    beforeEach(() => {
      state = { user: { profile: {}, images: [] } };
    });
    describe('profile()', () => {
      it('returns an empty profile', () => {
        expect(selectors.profile(state)).to.eql({});
      });
    });

    describe('isLoggedIn', () => {
      it('returns false ', () => {
        expect(selectors.isLoggedIn(state)).to.eql(false);
      });
    });

    describe('userImages', () => {
      it('returns an empty array', () => {
        expect(selectors.userImages(state)).to.eql([]);
      });
    });
  });
});
