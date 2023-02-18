import React from "react";
import { Link } from "react-router-dom";
import MobileApp from "../MobileApp/MobileApp";
import "./CheckOut.css";

const CheckOut = () => {
  return (
    <div>
      <div className="top-banner text-start">
        <h1>Checkout</h1>
        <p>
          Home // <span>Checkout</span>
        </p>
      </div>
      <div className="">
        <h1 className="m-5 pt-5">Checkout</h1>
        <div className="row checkout gx-5">
            <div className="col-md-8 col-12 text-start mb-5">
                <p>Buyer Info</p>
                <hr className="w-100"/>
                <div className="row">
                    <div className="col-md-6 col-12 p-3">
                        <p>Full Name</p>
                        <input className="w-100 p-2" type="text" placeholder="Enter Name" name="" id="" />
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <p>Email</p>
                        <input className="w-100 p-2" type="email" placeholder="Enter email"  name="" id="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 p-3">
                        <p>Address</p>
                        <input className="w-100 p-2" type="text" placeholder="Enter Address" name="" id="" />
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <p>Contact</p>
                        <input className="w-100 p-2" type="email" placeholder="Enter phone number"  name="" id="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 p-3">
                        <p>Country</p>
                        <input className="w-100 p-2" type="text" placeholder="Enter Country" name="" id="" />
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <p>City</p>
                        <input className="w-100 p-2" type="email" placeholder="Enter City"  name="" id="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 p-3">
                        <p>State</p>
                        <input className="w-100 p-2" type="text" placeholder="Enter State" name="" id="" />
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <p>Zip Code</p>
                        <input className="w-100 p-2" type="email" placeholder="Enter Zip Code"  name="" id="" />
                    </div>
                    <div className="col-12 p-3">
                        <p>Note</p>
                        <input className="w-100 p-2" type="text" placeholder="Enter Note" name="" id="" />
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 checkout-item-info">
                <h3 className="my-3 p-2">Your Order Summary</h3>
                <div className="d-flex justify-content-between">
                    <p>Nutrition Course</p>
                    <p>Price</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <p>Subtotal</p>
                    <p>Price</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Shipping</p>
                    <p>Price</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Tax</p>
                    <p>Price</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <p>Total</p>
                    <p>Price</p>
                </div>
                <hr />
                <h4>Payment</h4>
                <div className="mt-5 bank">
                    <button className="py-2 text-white  border-0 rounded-pill m-2 fs-5 px-3">Credit Card</button>
                    <button className="py-2 text-white  border-0 rounded-pill m-2 fs-5 px-3">Bank Transfer</button>
                    <button className="py-2 text-white  border-0 rounded-pill m-2 fs-5 px-3">Paypal</button>
                </div>
                <button  className="py-2 text-white w-100 bg-success border-0 rounded-pill mt-3 fs-5 px-3">CheckOut</button>
                <p className="pt-4"><Link className="text-decoration-none text-dark">Back to Cart</Link></p>
            </div>
        </div>
      </div>
      <MobileApp></MobileApp>
    </div>
  );
};

export default CheckOut;
