import React from "react";
import MobileApp from "../MobileApp/MobileApp";
import { Link } from "react-router-dom";
import "./login.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  return (
    <div className="">
      <div className="top-banner text-start">
        <h1>Registration Form</h1>
        <p>
          Home // <span>Register</span>
        </p>
      </div>
      {loading || loadingGoogle ? (
        <div className="mt-5 pt-5 ">
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <></>
      )}
      <div className="signUp">
        <h2>
          Registration <span>Now</span>
        </h2>
        <input type="text" placeholder="Name" name="" id="" />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          name=""
          id=""
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          name=""
          id=""
        />
        <button
          onClick={() => createUserWithEmailAndPassword(email, password)}
          className="btn rounded-pill py-2 fs-5 fw-semi-bold px-5"
        >
          Register
        </button>
        <button
          onClick={() => signInWithGoogle()}
          className="btn rounded-pill py-2 fs-5 fw-semi-bold px-5 bg-success"
        >
          Sign Up With Google
        </button>
        <p className="text-danger">{error?.message || errorGoogle?.message}</p>
        <p>
          Already have an account?{" "}
          <Link className="text-decoration-none fs-6 text-warning" to="/signin">
            Login here.
          </Link>
        </p>
      </div>
      <MobileApp></MobileApp>
    </div>
  );
};

export default SignUp;
