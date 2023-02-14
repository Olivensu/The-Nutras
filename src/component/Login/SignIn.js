import React from 'react';
import MobileApp from '../MobileApp/MobileApp';
import { Link } from "react-router-dom";
import './login.css'

const SignIn = () => {
    return (
        <div className=''>
            <div className='top-banner text-start'>
                <h1>Login Form</h1>
                <p>Home // <span>Login</span></p>
            </div>
            <div className='signUp'>
                <h2>Login <span>Now</span></h2>
                <input type="email" placeholder='Email' name="" id="" />
                <input type="password" placeholder='Password' name="" id="" />
                <button className='btn rounded-pill py-2 fs-5 fw-semi-bold px-5'>Login</button>
                <button className='btn rounded-pill py-2 fs-5 fw-semi-bold px-5 bg-success'>Login With Google</button>
                <Link className='text-decoration-none fs-6 text-muted' to='/forgetPass'><p>Forget Password?</p></Link>
                <p>No account? <Link className='text-decoration-none fs-6 text-warning' to='/signUp'>Create one here.</Link></p>
            </div>
            <MobileApp></MobileApp>
        </div>
    );
};

export default SignIn;