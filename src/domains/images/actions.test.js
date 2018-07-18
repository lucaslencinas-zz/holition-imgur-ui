import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as imagesService from '../../services/imagesService';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Images Actions', () => {
  describe('When listing the images', () => {
    let images;
    let initialState;
    let store;
    let expectedActions;

    beforeEach(() => {
      initialState = { images: { list: [] } };

      store = mockStore(initialState);
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
      expectedActions = [{
        type: actionTypes.FETCH_IMAGES_SUCCESS,
        images
      }];

      sinon.stub(imagesService, 'list').callsFake(() => Promise.resolve(images));

      return store.dispatch(actions.fetchImages());
    });

    it('creates FETCH_IMAGES_SUCCESS', () => {
      expect(store.getActions()).to.eql(expectedActions);
    });
  });
});
