import React from "react";
import { Link } from "react-router-dom";
import "./blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container my-5 py-5">
      <p className="fw-bold text-success">OUR BLOG POST</p>
      <h1>Latest Article of Nutrition</h1>
      <div className="row  justify-content-md-center">
        <div className="blogs col-12 col-md-3 g-5 text-start">
          <div className="row text-center">
            <div className="col-4">
              <div className=" p-2 pb-1 blog-date">
                <h4 className="text-warning">24</h4>
                <p className="text-white">Feb</p>
              </div>
            </div>
            <div className="col-8 text-start">
              <p className="fs-5 my-1">
                <span className="text-success">By:</span> Shamuel Acuista
              </p>
              <p className="text-warning">
                <small>89 Likes</small> <span className="text-success">*</span> <small>58 Share</small>
              </p>
            </div>
          </div>
          <Link className="text-decoration-none text-dark" to='/blog-1'><h3 className="pt-3">Difference between authorization and authentication..</h3></Link>
          <p>
            In the world of information security, two concepts that are often
            used interchangeably but have different meanings are
            "authentication" and "authorization".
          </p>
        </div>
        <div className="blogs col-12 col-md-3 g-5 text-start">
          <div className="row text-center">
            <div className="col-4">
              <div className=" p-2 pb-1 blog-date">
                <h4 className="text-warning">28</h4>
                <p className="text-white">Feb</p>
              </div>
            </div>
            <div className="col-8 text-start">
              <p className="fs-5 my-1">
                <span className="text-success">By:</span> Tasbiul Hasan
              </p>
              <p className="text-warning">
                <small>89 Likes</small> <span className="text-success">*</span> <small>58 Share</small>
              </p>
            </div>
          </div>
          <Link className="text-decoration-none text-dark" to='/blog-2'><h3 className="pt-3">Why are you using firebase? What other options do you have to implement authentication?..</h3></Link>
          <p>
          Firebase is a popular mobile and web application development platform that provides a suite of tools and services to help developers build and deploy applications quickly and easily.

          </p>
        </div>
        <div className="blogs col-12 col-md-3 g-5 text-start">
          <div className="row text-center">
            <div className="col-4">
              <div className=" p-2 pb-1 blog-date">
                <h4 className="text-warning">21</h4>
                <p className="text-white">Feb</p>
              </div>
            </div>
            <div className="col-8 text-start">
              <p className="fs-5 my-1">
                <span className="text-success">By:</span> Maddie Rife
              </p>
              <p className="text-warning">
                <small>89 Likes</small> <span className="text-success">*</span> <small>58 Share</small>
              </p>
            </div>
          </div>
          <Link className="text-decoration-none text-dark" to='/blog-3'><h3 className="pt-3">What other services does firebase provide other than authentication?..</h3></Link>
          <p>
          Firebase is a comprehensive mobile and web development platform that offers developers a wide range of services to build, grow and manage their applications. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
