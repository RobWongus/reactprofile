import React from "react";

// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Cheers Bruv!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">GitHub</Nav.Link>
          <Nav.Link href="#features">LinkedIn</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    </>
  );
}

export default Header;