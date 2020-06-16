import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <Navbar className="foot" fixed="bottom" >
        <Navbar.Brand href="#home">Rob Wongus 2020</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
        </Nav>
      </Navbar>

      <style jsx="true">{`
        .foot {
          background: blue
          
        }
      `}</style>
    </>
    
  );
}

export default Footer;
