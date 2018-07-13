import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ image = {} }) => (
  <div className="card">
    <div className="card-image">
      {image.imgUrl}
    </div>
    <div className="card-title">
      {image.title}
    </div>
    <div className="card-username">
      {image.username}
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.object.isRequired
};

export default Card;
