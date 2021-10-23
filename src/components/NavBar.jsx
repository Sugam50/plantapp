import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import '../Style/navbar.css'
function NavBar() {
  return (
    <Navbar className="navbar">
      <Container>
        <Image  className="logoimage"
            src="https://cdn.discordapp.com/attachments/900789323908153437/901098486311825448/Copy_of_Plantify.png" alt="" />
        <Navbar.Brand className="plantify" href="/">Plantify</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="home" href="/">Home</Nav.Link>
          <Nav.Link className="aboutus" href="/About">About us</Nav.Link>
          <Nav.Link className="Donate" href="/donor">Donate</Nav.Link>
          <Nav.Link className="Planttree" href="/plant">Plant Tree</Nav.Link>
          <Nav.Link className="login" href="/login">Login</Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
