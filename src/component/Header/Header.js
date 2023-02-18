import React from "react";
import { NavLink } from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../img/logo.webp'
import './Header.css';
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar sticky='top' collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <Link to='/'><img src={logo} alt="" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="nav mx-auto">
              <NavLink className="link" href="/">Home</NavLink>
              <NavLink className="link"  href="/about">About Us</NavLink>
              <NavDropdown  className="link" title="All Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href='/totalCourses' className="dropdown-item"><Link className="text-decoration-none text-dark" >Courses</Link> </NavDropdown.Item>
              <NavDropdown.Item href='/Course-Details/1' className="dropdown-item"><Link className="text-decoration-none text-dark" >Course Details</Link> </NavDropdown.Item>
            </NavDropdown>
              <NavDropdown  className="link" title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item className="dropdown-item" href="#action3">Students</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"  href="/blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Review
              </NavDropdown.Item>
              <NavDropdown.Item href='/notfound' className="dropdown-item text-decoration-none text-dark">Page 404 </NavDropdown.Item>
            </NavDropdown>
              <NavLink className="link"  href="/blogs">Blog</NavLink>
              {
                user ?
                <>
                <NavLink className="link text-white bg-warning"  href="#home">{user?.displayName?.slice(0,8)}</NavLink>
                <NavLink className="link m-0 p-0"  href="#home"><img className="photoURL me-3 mb-2" src={user?.photoURL} alt="" /></NavLink>
                <NavLink onClick={logout} className="text-decoration-none btn btn-color bg-danger link rounded-pill px-4">Sign Out </NavLink></>
                :
                <NavLink href='/signup' className="text-decoration-none btn btn-color link rounded-pill px-4" >Sign Up </NavLink>
                
              }
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
