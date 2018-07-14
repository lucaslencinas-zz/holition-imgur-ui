import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ image = {} }) => {
  const className = `card ${image.isPublic ? '' : 'card-private'}`;
  return (
    <div className={className}>
      <img src="/default.jpeg" alt={image.imgUrl} />
      <p className="card-title">
        <b>{image.title}</b>
      </p>
      <p className="card-detail">
        <i>{image.username} ({image.isPublic ? 'public' : 'private'})</i>
      </p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.object.isRequired
};

export default Card;
