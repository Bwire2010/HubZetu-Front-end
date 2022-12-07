import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" className="py-5 mt-3 w3-large">
          <Container >
            <Navbar.Brand href="/"><strong>HubZetu</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href=''><strong>Sign Up</strong></Nav.Link>
                <Nav.Link href=''><strong>Login</strong></Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;