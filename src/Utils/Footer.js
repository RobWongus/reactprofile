import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <Navbar fixed="bottom" >
        <Navbar.Brand href="#home">Rob Wongus 2020</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Footer;
