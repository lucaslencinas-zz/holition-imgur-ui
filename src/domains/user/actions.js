import { push } from 'react-router-redux';
import * as actions from './actionTypes';
import * as selectors from './selectors';
import * as userService from '../../services/userService';

export function fetchUserImages() {
  return (dispatch, getState) => {
    const state = getState();
    const profile = selectors.profile(state);

    if (!profile.authToken) {
      return Promise.resolve(dispatch(push('/login')));
    }
    return userService.fetchUserImages(profile)
      .then((images) => (
        dispatch({
          type: actions.FETCH_USER_IMAGES_SUCCESS,
          images
        })
      ));
  };
}

export function fetchUserProfile() {
  return (dispatch, getState) => {
    const state = getState();
    const profile = selectors.profile(state);
    if (!profile.authToken) {
      return Promise.resolve(dispatch(push('/login')));
    }
    return userService.fetchProfile(profile)
      .then((fullProfile) => (
        dispatch({
          type: actions.FETCH_PROFILE_SUCCESS,
          profile: fullProfile
        })
      ));
  };
}

export function login({ username, password }) {
  return (dispatch) => (
    userService.login({ username, password })
      .then((profile) => (
        dispatch({
          type: actions.LOGIN_SUCCESS,
          profile
        })
      ))
      .then(() => dispatch(push('/')))
  );
}

export function logout() {
  return (dispatch, getState) => {
    const state = getState();
    const profile = selectors.profile(state);
    return userService.logout(profile)
      .then((loggedOutProfile) => (
        dispatch({
          type: actions.LOGOUT_SUCCESS,
          profile: loggedOutProfile
        })
      ))
      .then(() => dispatch(push('/')));
  };
}
