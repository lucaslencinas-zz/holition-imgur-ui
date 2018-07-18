import { expect } from 'chai';
import * as types from './actionTypes';
import reducers from './reducers';

describe('users reducer', () => {
  let profile;
  let initialState;
  let newState;
  let action;

  beforeEach(() => {
    initialState = {
      profile: {},
      images: []
    };
  });

  describe('when no action is triggered', () => {
    it('return the initial state', () => {
      expect(reducers(initialState, {})).to.deep.equal(initialState);
    });
  });

  describe('when the user logs in successfully', () => {
    beforeEach(() => {
      initialState = {
        profile: {},
        images: []
      };
      profile = {
        name: 'Lucas',
        username: 'lucas',
        age: 27,
        gender: 'male',
        authToken: 'some-long-token'
      };
      action = { type: types.LOGIN_SUCCESS, profile };
      newState = reducers(initialState, action);
    });

    it('stores the profile and set isFull to false', () => {
      expect(newState.profile).eql({ ...profile, isFull: false });
    });
  });

  describe('when the user logs out successfully', () => {
    beforeEach(() => {
      profile = {
        name: 'Lucas',
        username: 'lucas',
        age: 27,
        gender: 'male',
        authToken: 'some-long-token',
        isFull: true
      };

      initialState = {
        profile: { ...profile },
        images: [
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
        ]
      };
      action = { type: types.LOGOUT_SUCCESS, profile };
      newState = reducers(initialState, action);
    });

    it('set the isFull to false and delete the images', () => {
      expect(newState.profile).eql({ ...profile, isFull: false });
      expect(newState.images).eql([]);
    });
  });

  describe('when getting the user profile', () => {
    beforeEach(() => {
      profile = {
        name: 'Lucas',
        username: 'lucas',
        age: 27,
        gender: 'male',
        authToken: 'some-long-token'
      };

      initialState = {
        profile: {
          name: 'Lucas',
          username: 'lucas',
          isFull: false,
          authToken: 'some-long-token'
        },
        images: []
      };
      action = { type: types.FETCH_PROFILE_SUCCESS, profile };
      newState = reducers(initialState, action);
    });

    it('set the isFull to true and stores the new profile', () => {
      expect(newState.profile).eql({ ...profile, isFull: true });
    });
  });

  describe('when getting the user images', () => {
    let images;

    beforeEach(() => {
      images = [
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

      initialState = {
        profile: {
          name: 'Lucas',
          username: 'lucas',
          isFull: false,
          authToken: 'some-long-token'
        },
        images: []
      };
      action = { type: types.FETCH_USER_IMAGES_SUCCESS, images };
      newState = reducers(initialState, action);
    });

    it('set the isFull to false and delete the images', () => {
      expect(newState.images).eql(images);
    });
  });
});
