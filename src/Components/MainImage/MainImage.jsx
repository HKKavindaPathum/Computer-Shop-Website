import React from 'react';
import './MainImage.css';
import hero_image from '../Assets/main_image.png';

const MainImage = () => {
  return (
    <div className="image">
      <div className="image-left">
        <h1>Welcome to Our Computer Shop</h1>
        <p>Find the best laptops, monitors, and graphics cards here.</p>
      </div>
      <div className="image-right">
        <img className="image-right-img" src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default MainImage;
