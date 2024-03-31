import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Menubar.scss'; // Import the Sass file
import { useNavigate } from 'react-router-dom';
const MenuBar = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate('/login');
  };
  const handlesignup = () => {
    navigate('/signup');
  };
  return (
    <div className="menu-bar">
      <Logo />
      <div className="button-container">
        <Button
          type="submit"
          label="Log In"
          a_class="btn_login"
          onClick={handlelogin}
        />
        <Button
          type="submit"
          label="Sign Up"
          a_class="btn_signup btn_eff"
          onClick={handlesignup}
        />
      </div>
    </div>
  );
};

export default MenuBar;
