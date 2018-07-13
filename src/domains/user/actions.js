import * as actions from './actionTypes';
import * as userService from '../../services/userService';

export function fetchUserImages() {
  return (dispatch) => (
    userService.fetchUserImages()
      .then((images) => (
        dispatch({
          type: actions.FETCH_USER_IMAGES_SUCCESS,
          images
        })
      ))
  );
}

export function fetchUserProfile() {
  return (dispatch) => (
    userService.fetchProfile()
      .then((profile) => (
        dispatch({
          type: actions.FETCH_PROFILE_SUCCESS,
          profile
        })
      ))
  );
}

export function fetchUserFullProfile() {
  return (dispatch) => (
    userService.fetchFullProfile()
      .then((fullProfile) => (
        dispatch({
          type: actions.FETCH_FULL_PROFILE_SUCCESS,
          profile: fullProfile
        })
      ))
  );
}
