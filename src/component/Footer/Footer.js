import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
      <div className="col-12 col-md-3">
        <h2>Subscribe Newsletter</h2>
        <p>This is the best Nutration site. Subscribe here with your email.</p>
        <Form>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="me-2 m-4 py-3"
            aria-label="Search"
          />
          <Button
            className="footer-btn py-3 fs-5 fw-bold"
            variant="outline-success"
          >
            Subscribe Now
          </Button>
        </Form>
      </div>
      <div className="col col-md-9 row">
        <div className="col-6 col-md-4">
          <h2>All Courses</h2>
          <p>Daily Exercise</p>
          <p>Find Your Balance</p>
          <p>Personal Program</p>
          <p>Natural Process</p>
          <p>Immune System</p>
          <p>Gives You Energy</p>
        </div>
        <div className="col-6 col-md-4">
          <h2>Help Links</h2>
          <p>Privacy Policy</p>
          <p>Discussion</p>
          <p>Terms & Conditions</p>
          <p>Customer Support</p>
          <p>Course FAQ's</p>
          <p>Online Classes</p>
        </div>
        <div className="col-6 col-md-4">
          <h2>Opening Hours</h2>
          <p>Mon-Fri: 9 AM - 6 PM</p>
          <p>Saturday: 9 AM - 4 PM</p>
          <p>Sunday: Closed</p>
          <h2>Location</h2>
          <p>176 W street name, New York, NY 10014</p>
        </div>
      </div>
      </div>
      <div className="row copyright">
        <div className="col-12 col-md-6">
            <p>© 2023 Nutras Made by Olive</p>
        </div>
        <div className="col-12 col-md-6">
            <span className="footer-span">* Terms of Service </span>
            <span className="footer-span">* Privacy Policy</span>
            <span className="footer-span">* Sitemap</span>
            <span className="footer-span">* Security</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
