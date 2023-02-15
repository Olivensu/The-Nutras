import React from "react";
import "./Home.css";
import {} from "@heroicons/react/24/solid";
import {
  FaFacebookF,
  FaSkype,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home ">
      <div className="row text-start">
        <div className="col-md-6 col align-self-center">
          <p className="text">FITNESS & NUTRITION</p>
          <h1>This life style for your fitness, not only diet.</h1>
          <p className="text">
            It has survived not only five centuries but also...{" "}
          </p>
          <button className="rounded-pill px-5 py-3">Start Course</button>
          <div>
            <p className="connect">
              Connect With us:
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaSkype />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaLinkedin />
              </span>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
