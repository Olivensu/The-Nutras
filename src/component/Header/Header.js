import React from "react";
import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../../img/logo.webp'
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar className="" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="nav mx-auto">
              <NavLink className="link" to="#home">Home</NavLink>
              <NavLink className="link"  to="#link">About Us</NavLink>
              <NavDropdown  className="link" title="All Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item className="dropdown-item" href="#action3">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              All Courses
              </NavDropdown.Item>
            </NavDropdown>
              <NavDropdown  className="link" title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item className="dropdown-item" href="#action3">Students</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Review
              </NavDropdown.Item>
            </NavDropdown>
              <NavLink className="link"  href="#home">Blog</NavLink>
              <NavLink className="link"  href="#home">Contact</NavLink>
              <NavLink className="btn btn-color link rounded-pill px-4" href="#home">Sign Up</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
