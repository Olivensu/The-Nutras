import React from 'react';
import './Course.css'
import courseimg from '../../img/Courses/courses-1.webp'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Course = (props) => {
    const {id,name, img, lecture, time, price, course} = props.course;
    const navigate  = useNavigate()
    const handleCourseDetails = id =>{
        navigate(`/Course-Details/${id}`)
    }
    return (
        <div className=' course col-12 col-md-4'>
            <img  onClick={()=>handleCourseDetails(id)} className='img-fluid' src={img} alt="" />
            <div><h4>${price}</h4></div>
            <div className='text-start ps-3'>
            <p>By: <span>{name}</span></p>
            <h2 onClick={()=>handleCourseDetails(id)}>{course}</h2>
            <small>{time} </small> <span className='text-success  m-0 p-0'>-</span> <small> {lecture}</small>
            </div>
        </div>
    );
};

export default Course;