import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('Grid', () => {
  let images;
  let grid;

  describe('With no images', () => {
    beforeEach(() => {
      images = [];
      grid = shallow(<Grid images={images} />);
    });

    it('Renders the grid but without any Card component', () => {
      const gridElement = grid.find('[className="grid"]');
      const cards = grid.find('[className="card-wrapper"]');
      expect(gridElement.exists()).to.equal(true);
      expect(cards.length).to.equal(0);
    });
  });

  describe('With images', () => {
    beforeEach(() => {
      images = [
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
      grid = shallow(<Grid images={images} />);
    });

    it('Renders the grid with Card components', () => {
      const gridElement = grid.find('[className="grid"]');
      const cards = grid.find('Card');
      expect(gridElement.exists()).to.equal(true);
      expect(cards.length).to.equal(2);
    });
  });
});
