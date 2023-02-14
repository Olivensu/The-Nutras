import React from 'react';
import MobileApp from '../MobileApp/MobileApp';
import { Link } from "react-router-dom";
import './login.css'

const SignUp = () => {
    return (
        <div className=''>
            <div className='top-banner text-start'>
                <h1>Registration Form</h1>
                <p>Home // <span>Register</span></p>
            </div>
            <div className='signUp'>
                <h2>Registration <span>Now</span></h2>
                <input type="text" placeholder='Name' name="" id="" />
                <input type="email" placeholder='Email' name="" id="" />
                <input type="password" placeholder='Password' name="" id="" />
                <button className='btn rounded-pill py-2 fs-5 fw-semi-bold px-5'>Create An Account</button>
                <button className='btn rounded-pill py-2 fs-5 fw-semi-bold px-5 bg-success'>Sign Up With Google</button>
                <p>Already have an account? <Link className='text-decoration-none fs-6 text-warning' to='/signin'>Login here.</Link></p>
            </div>
            <MobileApp></MobileApp>
        </div>
    );
};

export default SignUp;