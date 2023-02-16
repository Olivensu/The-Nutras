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
              <NavLink><Link className="link text-decoration-none" to="/">Home</Link></NavLink>
              <NavLink className="link"  to="#link">About Us</NavLink>
              <NavDropdown  className="link" title="All Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item className="dropdown-item"><Link className="text-decoration-none text-dark" to='/totalCourses'>Courses</Link> </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link className="text-decoration-none text-dark" to='/Course-Details/1'>Course Details</Link> </NavDropdown.Item>
            </NavDropdown>
              <NavDropdown  className="link" title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item className="dropdown-item" href="#action3">Students</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Review
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link className="text-decoration-none text-dark" to='/notfound'>Page 404</Link> </NavDropdown.Item>
            </NavDropdown>
              <NavLink className="link"  href="#home">Blog</NavLink>
              <NavLink className="link"  href="#home">Contact</NavLink>
              {
                user ?
                <>
                <NavLink className="link text-white bg-warning"  href="#home">{user?.displayName.slice(0,8)}</NavLink>
                <NavLink className="link m-0 p-0"  href="#home"><img className="photoURL me-3 mb-2" src={user?.photoURL} alt="" /></NavLink>
                
                <Link onClick={logout} className="text-decoration-none btn btn-color link rounded-pill px-4">Sign Out </Link></>
                :
                <Link className="text-decoration-none btn btn-color link rounded-pill px-4" to='/signup'>Sign Up </Link>
              }
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
