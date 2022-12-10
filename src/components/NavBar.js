import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect  expand="sm" bg="primary" variant="dark" className="py-5 mt-3 w3-large">
          <Container >
            <Navbar.Brand href="/"><strong>HubZetu</strong></Navbar.Brand>
            <Navbar.Brand href="/hubs"><strong>Hubs</strong></Navbar.Brand>
            <Navbar.Brand href="/hubs/new"><strong>Add Hub</strong></Navbar.Brand>
            <Navbar.Brand href="/"><strong>SignOut</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
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