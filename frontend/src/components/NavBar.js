import React from 'react';
import{ Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Stlyes = styled.div`
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

export const NavigationBar = () => (
    <Styles>
        <NavBar expand="lg">
            <Navbar.Brand href = "/">MovieNight</Navbar.Brand>
        </NavBar>
    </Styles>
)
