import React, { Component } from "react";
import Movie from "./Movie";
import MyMovies from "./MyMovies";
import Search from "./components/Search";
// import "./MoviesContainer.css";
import { Container, Row, Col } from "react-bootstrap";

export class MoviesContainer extends Component {
  state = {
    displayIndex: 0,
  };

  render() {
    return (
      <div>
        <h1>Movies List</h1>
        <Search
          updateFilter={this.props.updateFilter}
          handleSearch={this.props.handleSearch}
        />
        {localStorage.token ? (
          <div className="movies-container">
            {this.props.allMovies.map((movie) => {
              return (
                <Movie
                  className="movie"
                  history={this.props.history}
                  movie={movie}
                  addMovies={this.props.addMovies}
                  select={this.props.selectMovie}
                />
              );
            })}
          </div>
        ) : (
          <h4>Please Log In To View Our Movies</h4>
        )}
      </div>
    );
  }
}
