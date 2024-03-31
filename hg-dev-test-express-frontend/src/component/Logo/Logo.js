import React from 'react';
import logoSvg from '../../image/Logo.png';
import './Logo.scss'; // Import the Sass file

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoSvg} alt="Logo" />
    </div>
  );
};

export default Logo;