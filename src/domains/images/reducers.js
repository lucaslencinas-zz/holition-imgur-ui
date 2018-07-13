import * as actions from './actionTypes';

const initialState = {
  list: []
};

export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.images)
      };

    default:
      return state;
  }
}
