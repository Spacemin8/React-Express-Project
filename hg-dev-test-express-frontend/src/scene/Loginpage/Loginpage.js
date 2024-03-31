import React from 'react';
import Logo from '../../component/Logo/Logo';
import Menubar from '../../component/Menubar/Menubar';
import Login from '../../component/Login/Login';
import './Loginpage.scss';

const LoginPage = () => {
  return (
    <div>
      <Menubar />
      <div className="Login-page">
        <div className="Login-back">
          <Logo />
        </div>
        <div className="Login-set">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
