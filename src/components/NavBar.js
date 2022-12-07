import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect  expand="sm" bg="primary" variant="dark" className="py-5 mt-3 w3-large">
          <Container >
            <Navbar.Brand href="/"><strong>HubZetu</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <NavLink to ='/' className="navitem"><strong>Home</strong></NavLink>
                <NavLink to ='/hubs' className="navitem"><strong>Hubs</strong></NavLink>
                <NavLink to ='/signup' className="navitem"><strong>Sign Up</strong></NavLink>
                <NavLink to='/login' className='navitem'><strong>Login</strong></NavLink>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


                // <NavLink href='/'><strong>Home</strong></NavLink>
                // <NavLink href='/hubs'><strong>All Hubs</strong></NavLink>
                // <NavLink href='/hubs/new'><strong>Create New Hub</strong></NavLink>



export default NavBar;