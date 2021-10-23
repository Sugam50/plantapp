import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Style/navbar.css'
function NavBar() {
  return (
    <Navbar className="navbar">
      <Container>
        <Image  className="logoimage"
            src="https://cdn.discordapp.com/attachments/900789323908153437/901098486311825448/Copy_of_Plantify.png" alt="" />
        <Navbar.Brand className="plantify" href="/">Plantify</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="home"      to="/">Home</Link>
          <Link className="aboutus"   to="/About">About us</Link>
          <Link className="Donate"    to="/donor">Donate</Link>
          {/* <Link className="Planttree" to="/plant">Plant Tree</Link> */}
          <Link className="login"     to="/login">Login</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
