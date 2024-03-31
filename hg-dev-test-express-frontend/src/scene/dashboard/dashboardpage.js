import React from 'react';
import Focusbar from '../../component/Focusbar/Focusbar';
import Focus from '../../component/Focus/Focus';
import Focusfooter from '../../component/Focusfooter/Focusfooter';
import './dashboardpage.scss';

const dashboardpage = () => {
  return (
    <div>
      <Focusbar />
      <div className="dashboard-page">
        <div className="dashboard-back">
          <h1>Your Focus</h1>
          <div className="hr2"></div>
          <div className="hrv"></div>
          <Focus />
          <Focusfooter />
        </div>
      </div>
    </div>
  );
};
export default dashboardpage;
