import { expect } from 'chai';
import sinon from 'sinon';
import * as imagesService from './imagesService';

describe('imagesService', () => {
  let imagesPromise;
  let images;
  let response;
  let url;

  describe('list', () => {
    describe('when the service responds correctly', () => {
      beforeEach(() => {
        images = [
          {
            imgId: 'some-id1',
            imgUrl: 'https://i.imgur.com/3NXNpNC.jpg',
            username: 'lucas',
            title: 'Some title for some-id1',
            isPublic: true
          },
          {
            imgId: 'some-id2',
            imgUrl: 'https://i.imgur.com/SFSZVaq.jpg',
            username: 'leonardo',
            title: 'Some title for some-id1',
            isPublic: false
          },
          {
            imgId: 'some-id3',
            imgUrl: 'https://i.imgur.com/p3P3u5F.jpg',
            username: 'lencinas',
            title: 'Some title for some-id1',
            isPublic: true
          }
        ];
        response = [...images];
        url = 'htpp://0.0.0.0:3001/api/images';
        global.fetch = sinon.stub()
          .withArgs(url)
          .returns(new Promise((resolve) => {
            resolve({ json: () => response });
          }));

        imagesPromise = imagesService.list();
      });

      it('should return a json with the images', () => {
        imagesPromise.then(($response) => {
          expect($response).to.eql(response);
        });
      });
    });
  });
});
