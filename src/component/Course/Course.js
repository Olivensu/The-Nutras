import React from 'react';
import './Course.css'
import courseimg from '../../img/Courses/courses-1.webp'

const Course = (props) => {
    const {name, img, lecture, time, price, course} = props.course
    return (
        <div className=' course col-12 col-md-4'>
            <img src={img} alt="" />
            <div><h4>${price}</h4></div>
            <div className='text-start ps-3'>
            <p>By: <span>{name}</span></p>
            <h2>{course}</h2>
            <small>{time} </small> <span className='text-success  m-0 p-0'>-</span> <small> {lecture}</small>
            </div>
        </div>
    );
};

export default Course;