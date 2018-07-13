import * as actions from './actionTypes';

const initialState = {
  profile: {},
  images: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_USER_IMAGES_SUCCESS:
      return {
        ...state,
        images: state.images.concat(action.images)
      };

    case actions.FETCH_FULL_PROFILE_SUCCESS:
      return {
        ...state,
        profile: { ...action.profile, isFull: true }
      };

    case actions.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: { ...action.profile, isFull: false }
      };

    default:
      return state;
  }
}
