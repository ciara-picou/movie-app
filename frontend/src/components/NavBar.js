import React from 'react';
import{ Nav, Navbar, Button } from 'react-bootstrap';
//import styled from 'styled-components';

// const Styles = styled.div`
// navbar { 
//     background-color: #222
// }
// .navbar-brand, .navbar-nav .nav-link {
//     color: #bbb;

//     &:hover {
//         color:white;
//     }
// } 
// `;

 const NavBar = () => (
    
        <Navbar bg="primary">
            <Navbar.Brand href = "/">MovieNight</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="m1-auto">
                    <Button href="/" variant="light">Home</Button>
                    <Button href="/movies" variant="light">Movies</Button>
                    <Button href="/my-movies" variant="light">MyMovies</Button>
                    <Button href="/signup" variant="light">Signup</Button>
                    <Button href="/login" variant="light">Login</Button>
                </Nav>
                
            {/* </Navbar.Collapse> */}
        </Navbar>
    
)
export default NavBar
