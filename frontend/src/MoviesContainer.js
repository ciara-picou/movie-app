import React, { Component } from 'react';
import Movie from './Movie'
import MyMovies from './MyMovies'

 export class MoviesContainer extends Component {

  state = {
    allMovies: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(movies => {
      this.setState({
        allMovies: movies
      })
    })

  }
  
  render() {
    return (
      <div>
          <h1>Movies List</h1>
          {this.state.allMovies.map(movie => {
            return <Movie key={movie.id} movie={movie}/>
          })}
      </div>
    );
  }

}

