import React from 'react';
import Course from '../Course/Course';
import CoursesHook from '../Hooks/CoursesHook';
import './Courses.css'

const totalCourses = () => {
    const [courses, setCourses]  = CoursesHook()
    return (
        <div className='courses'>
            <p>100+ COURSES AVAILABLE</p>
            <h1>Fitness & Nutrition Courses</h1>
            <div className='row'>
                {
                    courses.map(course => <Course 
                        course={course}
                        key = {course.id}
                    ></Course>)
                }
            </div>
            <button className='btn rounded-pill px-5 py-3 bg-success fs-5 text-white my-5'>See All The Courses</button>
        </div>
    );
};

export default totalCourses;