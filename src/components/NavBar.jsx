import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (



    <Nav class="navbar navbar-dark bg-primary" id="navBarLinks" variant="underline">
       


      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Shop Now</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">
          Contact Us
        </Nav.Link>
      </Nav.Item>
       <Nav.Item>
        <Nav.Link eventKey="disabled">
          Cart 
        </Nav.Link>
      </Nav.Item>
       

    </Nav>

  );
}

export default NavBar;