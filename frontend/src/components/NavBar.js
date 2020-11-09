import React from 'react';
import{ Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
navbar { 
    background-color: #222
}
.navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
        color:white;
    }
} 
`;

export const NavBar = () => (
    <Styles>
        <NavBar expand="lg">
            <Navbar.Brand href = "/">MovieNight</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m1-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/">Movie</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/">MyMovie</Nav.Link></Nav.Item>
                    
                </Nav>
                
            </Navbar.Collapse>
        </NavBar>
    </Styles>
)
