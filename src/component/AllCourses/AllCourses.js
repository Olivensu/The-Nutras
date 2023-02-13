import React from 'react';
import {
    FaFacebookF,FaSkype,FaTwitter,FaLinkedin,FaHeartbeat,FaArrowRight,FaMale,FaFemale,
  } from "react-icons/fa";
  import './AllCourses.css'

const AllCourses = () => {
    return (
        <div className='allCourses row p-5'>
            <div className='col-12 col-md-4 p-5'>
                <FaFemale className='allCourses-icon'/>
                <h2>Women's Course</h2>
                <p>Women's nutrition courses educate women about the importance of good nutrition for overall health and well-being. They cover topics such as fundamentals of nutrition, nutritional needs during different life stages, meal planning, and chronic disease prevention. These courses are taught by experienced professionals and include interactive discussions, hands-on activities, and practical advice for incorporating healthy habits into daily life.</p>
                <FaArrowRight className='arrowRight'></FaArrowRight>
            </div>
            <div className='col-12 col-md-4 p-5'>
                <h1><FaHeartbeat  className='allCourses-icon'/></h1>
                <h2>Basic Course</h2>
                <p>Basic nutrition courses provide a comprehensive foundation in the principles of nutrition. They cover topics such as the role of different nutrients in the body, how to make informed food choices, and how to plan healthy meals. These courses are designed for individuals looking to improve their diet and overall health, and include interactive discussions, hands-on activities, and practical advice for incorporating healthy habits into daily life.</p>
                <FaArrowRight className='arrowRight'></FaArrowRight>
            </div>
            <div className='col-12 col-md-4 p-5'>
                <h1><FaMale  className='allCourses-icon'/></h1>
                <h2>Men's Course</h2>
                <p>Men's nutrition courses provide men with the information and skills they need to make informed decisions about their diet and health. They cover topics such as the basics of nutrition, nutritional needs throughout life cycle, and how to incorporate healthy eating habits. These courses are taught by experienced professionals and include interactive discussions, hands-on activities, and practical advice for improving overall well-being.</p>
                <FaArrowRight className='arrowRight'></FaArrowRight>
            </div>
        </div>
    );
};

export default AllCourses;