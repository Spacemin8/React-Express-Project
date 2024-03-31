import React from 'react';
import './Focusfooter.scss';
import Logo from '../Logo/Logo';
import tglogo from '../../image/Telegram logo.png';
import twitter from '../../image/twitter logo.png';
import capLogo from '../../image/Capture.PNG';
import send from '../../image/image 10.png';
const Focusfooter = () => {
  return (
    <div className="focusfooter-menu">
      <div className="focusfooter-field">
        <div className="focusfooter-mark">
          <Logo />
          <div>
            <button className="btn_eff">contact us</button>
          </div>
        </div>
        <div className="focusfooter-dec">
          <div className="mark-btn">
            <button className="btn-opa">
              <img src={tglogo} alt=""></img>
            </button>
            <button className="btn-opa">
              <img src={twitter} alt=""></img>
            </button>
          </div>
          <p>
            FAQ <br />
            Terms & Conditions <br />
            <span>Founded by:</span>
          </p>
          <div className="mark-img">
            <img src={capLogo} alt=""></img>
            <img src={send} alt=""></img>
          </div>
        </div>
      </div>
      <div className="hr1"></div>
      <div className="focusfooter-des">© 2023 Design. All right reserves</div>
    </div>
  );
};
export default Focusfooter;
