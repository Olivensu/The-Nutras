import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Course from "../Course/Course";
import CoursesHook from "../Hooks/CoursesHook";
import "./Courses.css";
import {
    FaSearch
  } from "react-icons/fa";

const TotalCourses = () => {
  const [courses, setCourses] = CoursesHook();
  return (
    <div className="total-courses">
      <div className="top-banner text-start">
        <h1>All Courses</h1>
        <p>
          Home // <span>All Courses</span>
        </p>
      </div>
      <div className="row justify-content-center">
        <select className="select col-md-3 col-4 rounded">
          <option value="1">Education</option>
          <option value="1">Design</option>
          <option value="1">Education</option>
          <option value="1">Design</option>
         
        </select>
        <div className="col-md-5 col-8">
        <input className="select w-50 rounded" type="text" placeholder="Search here " name="" id="" />
        <button className="btn bg-success p-3 ms-3"><FaSearch></FaSearch></button>
        </div>
      </div>
      <div className="courses">
        <div className="row">
          {courses.map((course) => (
            <Course course={course} key={course.id}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalCourses;
