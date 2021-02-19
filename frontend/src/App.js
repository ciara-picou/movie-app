import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    reviews: [],
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/movies", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((movies) => {
        this.setState({
          allMovies: movies,
        });
      });

    fetch(`http://localhost:3000/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        this.setState({
          loggedInUserId: user.id,
          myMovies: user.movies,
        });
      });

    fetch("http://localhost:3000/reviews", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((reviews) => {
        this.setState({
          reviews: reviews,
        });
      });
  };

  setLoggedInUserId = (id) => {
    this.setState({
      loggedInUserId: id,
    });
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
          console.log(this.state.myMovies);
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
      return displayMovies.filter((movie) =>
        movie.mood === this.state.moodFilter)
    }
    return displayMovies;
  };

  selectMovie = (movie) => {
    this.setState({ selectedMovie: movie });
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
    console.log(e.target.value[0], e.target.value[1], e.target.value[2]);
    // fetch("http://localhost:3000/reviews", {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${localStorage.token}`,
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //       reviews: {
    //         content:e.target.value[0],
    //         movie_id:e.target.value[1].id,
    //         username:e.target.value[2]
    //       },
    //     }),
    //   })
    //     .then((res) => res.json())

    //     .then((theNewReview) => {
    //       this.setState({
    //         reviews: [...this.state.reviews, theNewReview],
    //         selectedMovie:e.target.value[1]

    //       });
    //       console.log(this.state.myMovies)
    //     });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route
              path="/login"
              render={(routerProps) => (
                <Login {...routerProps} setUser={this.setLoggedInUserId} />
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
