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
          <Nav.Link href="https://github.com/RobWongus/Week11ExpressHomeworkNoteTaker">GitHub</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/robert-phoenix-630507b/">LinkedIn</Nav.Link>
          <Nav.Link href="https://docs.google.com/document/d/1S_5ErNysxbb711DW6CCcMSiF4-N5cGSfD-mUH9U9oGo/edit">Resume and Contact</Nav.Link>
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
