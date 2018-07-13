import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import UserImages from './UserImages';

const userImages = [
  {
    imgId: 'some-id2',
    imgUrl: 'http://some-url.com/leonardo-example',
    username: 'leonardo',
    title: 'Some title for some-id1',
    isPublic: false
  },
  {
    imgId: 'some-id3',
    imgUrl: 'http://some-url.com/lencinas-example',
    username: 'lencinas',
    title: 'Some title for some-id1',
    isPublic: true
  }
];

describe('UserImages', () => {
  let userImagesComponent;
  let onLoadUserImages;

  describe('When shallowing', () => {
    beforeEach(() => {
      onLoadUserImages = sinon.spy();
      userImagesComponent = shallow((
        <UserImages onLoadUserImages={onLoadUserImages} userImages={userImages} />
      ));
    });

    it('Renders the elements correctly', () => {
      const grid = userImagesComponent.find('Grid');
      expect(userImagesComponent.find('h3').text()).to.equal('My Images');
      expect(grid.prop('images')).to.equal(userImages);
    });
  });
});
