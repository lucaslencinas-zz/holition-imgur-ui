import React from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';
import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    const { images = [], onLoadImages } = this.props;

    if (images.length === 0) {
      onLoadImages();
    }
  }

  render() {
    const { images, onLoadImages } = this.props;

    return (
      <div className="home">
        <h1>Wall</h1>
        <Grid
          images={images}
          onLoadImages={onLoadImages}
        />
      </div>
    );
  }
}

Home.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadImages: PropTypes.func.isRequired
};

export default Home;
