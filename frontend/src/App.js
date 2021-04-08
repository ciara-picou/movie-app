import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import { MyMovies } from "./MyMovies";
import Movie from "./Movie";
import { MoviesContainer } from "./MoviesContainer";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import NavBar from "./components/NavBar";
import Login from "./Login";
import Signup from "./Signup";
import Search from "./components/Search";
import MoviePage from "./components/MoviePage";

class App extends Component {
  state = {
    allMovies: [],
    allGenres: [],
    filter: "All",
    moodFilter: "All",
    searchValue: "",
    myMovies: [],
    loggedInUserId: null,
    selectedMovie: "",
    selectedMovieReviews: [],
   
  };

  

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:3000/movies`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }),
      fetch(`http://localhost:3000/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }),
    ])

      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        console.log(res2);
        // set state in here
        this.setState({
          allMovies: res1,
          loggedInUserId: res2.id,
          myMovies: res2.movies,
        });
      });
  }

  setLoggedInUserId = (id) => {
    this.setState({
      loggedInUserId: id,
    });
  };

  handleLogout = () => {
    this.setState({
      loggedInUserId: null,
    });
    localStorage.clear();
  };

  updateFilter = (newFilter) => {
    console.log(newFilter);
    this.setState({
      filter: newFilter,
    });
  };

  updateMoodFilter = (newFilter) => {
    console.log(newFilter);
    this.setState({
      moodFilter: newFilter,
    });
  };

  handleSearch = (searchValue) => {
    this.setState({
      searchValue: searchValue,
    });
  };

  addMovies = (newMovie) => {
    console.log(newMovie);
    if (!this.state.myMovies.find((movie) => movie.id === newMovie.id)) {
      fetch("http://localhost:3000/watch_items", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          watch_items: {
            movie_id: newMovie.id,
            user_id: this.state.loggedInUserId,
          },
        }),
      })
        .then((res) => res.json())

        .then((theNewMovie) => {
          this.setState({
            myMovies: [...this.state.myMovies, theNewMovie.movie],
          });
        });
    }
  };

  displayMovies = () => {
    let displayMovies = this.state.allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );

    if (this.state.filter !== "All") {
      return displayMovies.filter((movie) =>
        movie.genres.some((genre) => genre.name.includes(this.state.filter))
      );
    }
    if (this.state.moodFilter !== "All") {
      return displayMovies.filter(
        (movie) => movie.mood === this.state.moodFilter
      );
    }
    return displayMovies;
  };

  selectMovie = (movie) => {
    this.setState({ selectedMovie: movie });
    this.setState({ selectedMovieReviews: movie.reviews });
  };

  delete = (watchItemId) => {
    let updateMyMovies = this.state.myMovies.filter(
      (movie) => movie.id !== watchItemId
    );
    fetch(`http://localhost:3000/watch_items/${watchItemId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(
      this.setState({
        myMovies: updateMyMovies,
      })
    );
  };

  newReview = (e) => {
    console.log("a new review");
    e.preventDefault();
    let movieString = e.target[2].value;
    let movie = JSON.parse(movieString);
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        reviews: {
          content: e.target[0].value,
          username: e.target[1].value,
          movie_id: movie.id,
        },
      }),
    })
      .then((res) => res.json())

       .then((theNewReview) => {
        console.log(this.state.selectedMovie.reviews)
        this.state.selectedMovie.reviews.push(theNewReview)
        this.setState({
          selectedMovie: this.state.selectedMovie
        });
  
        console.log(this.state.selectedMovieReviews);
      });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar handleLogout={this.handleLogout} />
        <Router>
          <Switch>
            <Route
              path="/login"
              render={(routerProps) => (
                <Login {...routerProps} setUser={this.setLoggedInUserId} />
              )}
            />
            <Route
              path="/logout"
              render={(routerProps) => (
                <Home {...routerProps} setUser={this.setLoggedInUserId} />
              )}
            />
            <Route
              path="/signup"
              render={(routerProps) => <Signup {...routerProps} />}
            />
            <Route
              exact
              path="/"
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              exact
              path="/moviepage"
              render={(routerProps) => (
                <MoviePage
                  {...routerProps}
                  selectedMovie={this.state.selectedMovie}
                  selectMovie={this.selectMovie}
                  newReview={this.newReview}
                />
              )}
            />
            <Route
              exact
              path="/movies"
              render={(routerProps) => (
                <MoviesContainer
                  {...routerProps}
                  myMovies={this.state.myMovies}
                  allMovies={this.displayMovies()}
                  updateFilter={this.updateFilter}
                  updateMoodFilter={this.updateMoodFilter}
                  handleSearch={this.handleSearch}
                  addMovies={this.addMovies}
                  selectMovie={this.selectMovie}
                  newReview={this.newReview} //
                />
              )}
            />
            <Route
              path="/my-movies"
              render={(routerProps) => (
                <MyMovies
                  {...routerProps}
                  myMovies={this.state.myMovies}
                  addMovies={this.addMovies}
                  deleteMovie={this.delete}
                />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
