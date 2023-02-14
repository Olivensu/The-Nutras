import React from "react";
import googleplay from '../../img/play-store.webp'
import appStore from '../../img/app-store.webp'
import './MobileApp.css'

const MobileApp = () => {
  return (
    <div className="MobileApp m-5">
      <p>MOBILE APP AVAILABLE</p>
      <h1>Download our mobile app. and start coaching anytime.</h1>
      <div>
        <button className="bg-white p-2  rounded border-0 m-3"><img src={googleplay} alt="" /></button>
        <button className="bg-white p-2 rounded border-0 "><img  src={appStore} alt="" /></button>
      </div>
    </div>
  );
};

export default MobileApp;
