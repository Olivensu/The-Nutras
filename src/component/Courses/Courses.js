import React from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import CoursesHook from '../Hooks/CoursesHook';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses]  = CoursesHook();
    console.log('olive',courses);
    return (
        <div className='courses'>
            <p>100+ COURSES AVAILABLE</p>
            <h1>Fitness & Nutrition Courses</h1>
            <div className='row'>
                {
                    courses.map(course => <Course 
                        course={course}
                        key = {course.id}
                    ></Course>).slice(0,6)
                }
            </div>
            <Link to='/totalCourses'><button className='btn rounded-pill px-5 py-3 bg-success fs-5 text-white my-5'>See All The Courses</button></Link>
        </div>
    );
};

export default Courses;