import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Css/NavBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthentication } from '../store/slices/authSlice';

const NavBarHome = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const signOut = () => {
    dispatch(setAuthentication())
  }
  return (
    <>
      <Navbar collapseOnSelect  expand="sm" bg="primary" variant="dark" className="py-4 mt-3" id="navbar">
          <Container className='container'>
            <Navbar.Brand href="/" className="hub"><strong>HubZetu</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <NavLink to ='/' className="navitem">Home</NavLink>
                <NavLink to='/login' className='navitem'>Login</NavLink>
                <NavLink to="/hubs"  className="navitem">Hubs</NavLink>
                <NavLink to="/hubs/new" className="navitem">AddHub </NavLink>
                { isAuthenticated && <button onClick={signOut} className="navitem3">Signout</button>}
                <NavLink to ='/signup' className="navitem2">SignUp</NavLink>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarHome;