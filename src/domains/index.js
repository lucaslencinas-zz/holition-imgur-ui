import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  actions as imagesActions,
  selectors as imagesSelectors,
  reducers as imagesReducers
} from './images';

export const reducers = combineReducers({
  images: imagesReducers,
  routing: routerReducer
});

export const actions = {
  ...imagesActions
};

export const selectors = {
  ...imagesSelectors
};
