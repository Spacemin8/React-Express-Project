import React from 'react';
import './Button.scss'; // Import the Sass file

const Button = ({ type, label, onClick, a_class }) => {
  return (
    <button type={'submit'} className={a_class} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
