import React from "react";
import Logo from '../../component/Logo/Logo';
import Menubar from '../../component/Menubar/Menubar';
import Signup from '../../component/Signup/Signup';
import './SignupPage.scss';

const SignupPage =()=>{
return(
 <div>
    <Menubar />
    <div className="signup-page">
      <div className="signup-back">
        <Logo />
      </div>
      <div className="signup-set">
        <Signup />
      </div>
    </div>
 </div>     


);
};
 
export default SignupPage;