import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="#home">Lets Sports</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/cards">Home</Nav.Link>
                <Nav.Link href="/login">Sing In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

//export default Header;
