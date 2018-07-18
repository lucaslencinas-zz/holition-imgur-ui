import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let image;
  let card;

  beforeEach(() => {
    image = {
      imgId: 'some-id3',
      imgUrl: 'http://some-url.com/lencinas-example',
      username: 'lencinas',
      title: 'Some title for some-id1',
      isPublic: true
    };
    card = shallow(<Card image={image} />);
  });

  it('Renders the name, username and the imgUrl of the image', () => {
    const imageUrl = card.find('img').prop('src');
    const imageTitle = card.find('[className="card-title"]').text();
    const imageUsername = card.find('[className="card-detail"]').text();

    expect(imageUrl).to.equal(image.imgUrl);
    expect(imageTitle).to.equal(image.title);
    expect(imageUsername).to.equal('lencinas (public)');
  });
});
