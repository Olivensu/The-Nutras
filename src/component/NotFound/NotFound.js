import React from "react";
import error from "../../img/error.webp";
import {Link} from 'react-router-dom'
import MobileApp from "../MobileApp/MobileApp";

const NotFound = () => {
  return (
    <div>
      <div className="top-banner text-start">
        <h1>Page Not Found</h1>
        <p>
          Home // <span>Error</span>
        </p>
      </div>
      <img className="img-fluid" src={error} alt="" />
      <h1 className="text-danger mt-5">Sorry,</h1>
      <h2>Something missiong....</h2>
      <p className="text-muted">Standard dummy text ever since the and when an unknown printe specimen book has survived centuries.</p>
      <Link to='/'><button className="rounded-pill px-5 py-3 bg-warning border-0 mb-5 fs-5">Back To Home</button></Link>
      <MobileApp></MobileApp>
    </div>
  );
};

export default NotFound;
