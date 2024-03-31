import React from 'react';
import './Focusbar.scss';
import { useNavigate } from 'react-router-dom';
import FocusPoint from '../../image/FocusPoint.png';
import Homepage from '../../image/Homepage.png';
import Logout from '../../image/Logout.png';
import Mystatictis from '../../image/My statistic.png';
import Pricing from '../../image/Pricing.png';
import Profile from '../../image/Profile.png';
import Rewards from '../../image/Rewards.png';
import butmenu from '../../image/menu-04.png';

const Focusbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/signip');
  };
  return (
    <div className="focus-bar">
      <div className="size"></div>
      <div className="btn-container">
        <button className="btn-Focus">
          <img src={Homepage} alt="" />
          <p className="btn-p">Homepage</p>
        </button>
        <button className="btn-Focus">
          <img src={FocusPoint} alt="" />
          <p className="btn-p">Focus Point</p>
        </button>
        <button className="btn-Focus">
          <img src={Rewards} alt="" />
          <p className="btn-p">Rewards</p>
        </button>
        <button className="btn-Focus">
          <img src={Profile} alt="" />
          <p className="btn-p">Profile</p>
        </button>
        <button className="btn-Focus">
          <img src={Mystatictis} alt="" />
          <p className="btn-p">My statistic</p>
        </button>
        <button className="btn-Focus">
          <img src={Pricing} alt="" />
          <p className="btn-p">Pricing</p>
        </button>
      </div>
      <div className="btn-log">
        <button className="btn-Focus" onClick={handleLogout}>
          <img src={Logout} alt="" />
          <p className="btn-p">Log out</p>
        </button>
      </div>
      <div className="btn-menu">
        <img src={butmenu} alt="" />
      </div>
    </div>
  );
};
export default Focusbar;
