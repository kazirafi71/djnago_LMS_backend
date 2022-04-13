import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">Learn Online</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Courses</Nav.Link>
              <NavDropdown title="Teacher" id="basic-nav-dropdown">
                <NavDropdown.Item href="/teacher-login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/teacher-registration">
                  Registration
                </NavDropdown.Item>
                <NavDropdown.Item href="/teacher/dashboard">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/teacher-login">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="/user-login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/user-registration">
                  Registration
                </NavDropdown.Item>
                <NavDropdown.Item href="/user-dashboard">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/user-login">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
