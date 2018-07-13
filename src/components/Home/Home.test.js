import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let home;
  let onLoadImages;

  describe('When shallowing', () => {
    beforeEach(() => {
      onLoadImages = sinon.spy();
      home = shallow((
        <Home onLoadImages={onLoadImages} images={images} />
      ));
    });

    it('Renders the elements correctly', () => {
      const grid = home.find('Grid');
      expect(home.find('h1').text()).to.equal('Wall');
      expect(grid.prop('images')).to.equal(images);
      expect(grid.prop('onLoadImages')).to.equal(onLoadImages);
    });
  });

  describe('When mounting with no images', () => {
    beforeEach(() => {
      onLoadImages = sinon.spy();
      home = mount(
        <Router>
          <Home onLoadImages={onLoadImages} images={[]} />
        </Router>
      );
    });

    it('Renders the elements correctly', () => {
      const grid = home.find('Grid');
      expect(grid.prop('images')).to.eql([]);
      expect(grid.prop('onLoadImages')).to.equal(onLoadImages);
    });

    it('Calls onLoadImages to get the images', () => {
      expect(onLoadImages.called).to.equal(true);
    });
  });

  describe('When mounting with images', () => {
    beforeEach(() => {
      onLoadImages = sinon.spy();
      home = mount(
        <Router>
          <Home onLoadImages={onLoadImages} images={images} />
        </Router>
      );
    });

    it('No need to call onLoadImages', () => {
      expect(onLoadImages.called).to.equal(false);
    });
  });
});

const images = [
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
