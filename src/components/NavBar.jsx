import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Image
          src="https://cdn.discordapp.com/attachments/900789323908153437/901098486311825448/Copy_of_Plantify.png"
          alt=""
          style={{
            width: "2.5rem",
            height: "2.5rem",
            margin: "0px 15px",
            borderRadius: "50%",
          }}
        />
        <Navbar.Brand href="/">Plantify</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#Team">About us</Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
