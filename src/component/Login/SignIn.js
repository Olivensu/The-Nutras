import React from "react";
import { useState } from "react";
import MobileApp from "../MobileApp/MobileApp";
import { Link } from "react-router-dom";
import "./login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Spinner } from "react-bootstrap";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  if (user) {
    return (
      <div>
        <p>Signed In User: {user?.user.email}</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="top-banner text-start">
        <h1>Login Form</h1>
        <p>
          Home // <span>Login</span>
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
          Login <span>Now</span>
        </h2>
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
          onClick={() => signInWithEmailAndPassword(email, password)}
          className="btn rounded-pill py-2 fs-5 fw-semi-bold px-5"
        >
          Login
        </button>
        <button onClick={() => signInWithGoogle()} className="btn rounded-pill py-2 fs-5 fw-semi-bold px-5 bg-success">
          Login With Google
        </button>
        <p className="text-danger">{error?.message || errorGoogle?.message}</p>
        <Link className="text-decoration-none fs-6 text-muted" to="/forgetPass">
          <p>Forget Password?</p>
        </Link>
        <p>
          No account?{" "}
          <Link className="text-decoration-none fs-6 text-warning" to="/signUp">
            Create one here.
          </Link>
        </p>
      </div>
      <MobileApp></MobileApp>
    </div>
  );
};

export default SignIn;
