import React from "react";
import { NavLink } from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../img/logo.webp'
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar sticky='top' collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="nav mx-auto">
              <NavLink><Link className="link text-decoration-none" to="/">Home</Link></NavLink>
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
              <Link className="text-decoration-none btn btn-color link rounded-pill px-4" to='/signup'>Sign Up </Link>
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
