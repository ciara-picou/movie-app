import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
//import JumboTron from "react-bootstrap";
import styled from "styled-components";
import movieImage from "../assets/movie.webp";



const Tron = () => {
  return (
    
      <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Welcome To The MovieApp!!</h1>
        </Container>
      </Jumbotron>
    
  );
};

export default Tron;
