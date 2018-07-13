import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Grid.css';

const Grid = ({ images = [] }) => (
  <div className="grid">
    {images.map((image) => (
      <div key={image.imgId} className="card-wrapper">
        <Card image={image} />
      </div>
    ))}
  </div>
);

Grid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Grid;
