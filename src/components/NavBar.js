import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Css/NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect  expand="sm" bg="info" variant="dark" className="py-4 mt-3">
          <Container className='container'>
            <Navbar.Brand href="/" className="hub"><strong>HubZetu</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <NavLink to ='/' className="navitem"><strong>Home</strong></NavLink>
                <NavLink to ='/signup' className="navitem"><strong>SignUp</strong></NavLink>
                <NavLink to='/login' className='navitem'><strong>Login</strong></NavLink>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;