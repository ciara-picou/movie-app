import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

const NavBar = (props) => (
  <Navbar bg="primary">
    <Navbar.Brand href="/">MovieNight</Navbar.Brand>
    <Nav className="m1-auto">
      <Button href="/" variant="light">
        Home
      </Button>
      <Button href="/movies" variant="light">
        Movies
      </Button>
      <Button href="/my-movies" variant="light">
        MyMovies
      </Button>
      <Button href="/signup" variant="light">
        Signup
      </Button>
      <Button href="/login" variant="light">
        Login
      </Button>
      <Button onClick={props.handleLogout} href="/logout" variant="light">
        Logout
      </Button>
    </Nav>
  </Navbar>
);
export default NavBar;
