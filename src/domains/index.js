import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  actions as imagesActions,
  selectors as imagesSelectors,
  reducers as imagesReducers
} from './images';

import {
  actions as userActions,
  selectors as userSelectors,
  reducers as userReducers
} from './user';

export const reducers = combineReducers({
  images: imagesReducers,
  user: userReducers,
  routing: routerReducer
});

export const actions = {
  ...imagesActions,
  ...userActions
};

export const selectors = {
  ...imagesSelectors,
  ...userSelectors
};
