import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../index.css';
import {Link} from 'react-router-dom'

function NavBar() {

  return (
 
   
    <Nav class="navbar navbar-dark bg-dark" id="nav" variant="underline" style={{color:'white'}}>
      
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/ShopNow">Shop Now</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/ContactUs" >
          Contact Us
        </Link>
      </Nav.Item>
       <Nav.Item>
        <Link  to="/Cart">
          Cart 
        </Link>
          </Nav.Item>
    </Nav>
  

  );
}

export default NavBar;