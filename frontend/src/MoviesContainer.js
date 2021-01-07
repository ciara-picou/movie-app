import React, { Component } from 'react';
import Movie from './Movie'
import MyMovies from './MyMovies'
import Search from './components/Search'


 export class MoviesContainer extends Component {

 
  
  render() {
    return (
      <div>
          <h1>Movies List</h1>
          <Search updateFilter={this.props.updateFilter} handleSearch={this.props.handleSearch}/> 
          {localStorage.token
          ? 
          this.props.allMovies.map(movie => { return <Movie history={this.props.history}  movie={movie} addMovies={this.props.addMovies} select={this.props.selectMovie}/>})
          :
        <h4>Please Log In</h4>
       
        
        }
       
      </div>
    );
  }

}


// {this.props.myMovies.map(movie => {
//   return <MyMovies movie={movie}  />
// })}
        
//We currently have no way of telling MoviesContainer whether it should be rendering allMovies or MyMovies



