import React from "react";
import { Card, Button } from "react-bootstrap";
export const MyMovies = (props) => {
  return (
    <div>
      {props.myMovies.map((movie) => (
        <div className="movies-container">
          <Card className="movie" style={{ width: "18rem" }} id="movies">
            <h2>{movie.movie.title}</h2>
            <Card.Img
              variant="top"
              src={movie.movie.poster_url}
              alt={movie.movie.title}
              className="movie-image"
              width="400"
            />
            <Card.Body>
              <Card.Title>{movie.movie.title}</Card.Title>
              <Button
                variant="secondary"
                onClick={(e) => props.deleteMovie(movie.id)}
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MyMovies;
