import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  Home  from './Home';
import { MyMovies } from './MyMovies';
import  Movie  from './Movie';
import { MoviesContainer } from './MoviesContainer';
import { NoMatch } from './NoMatch';
import {Layout}  from './components/Layout';
import NavBar from './components/NavBar';
import Tron from './components/JumboTron';
import Login from './Login';
import Signup from './Signup';
import Search from './components/Search';

class App extends Component {
  state = {
    allMovies: [],
    allGenres: [],
    filter: "All",
    searchValue:"",
    myMovies:[],
    loggedInUserId: null
    
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/movies',{
      method: "GET",
      headers:{
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(movies => {
       this.setState({
         allMovies: movies
       })
    })

    fetch(`http://localhost:3000/users`,{
      headers:{
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(res => res.json())
    .then(user => {
      this.setState({
        myMovies: user.movies,
        loggedInUserId: user.id
      })
    })
  
}
setLoggedInUserId = (id) => {
  this.setState({
    loggedInUserId: id
  })
}


  updateFilter = (newFilter) => {
    console.log(newFilter)
    this.setState({
      filter: newFilter
    })

  }


  handleSearch = (searchValue) => {
    
    this.setState({
      searchValue: searchValue
    })

  }

  checkGenre = (genres, searchTerm) => {
   
     genres.forEach(genre => {
      if (genre.name.includes(searchTerm)){
        return true
      }
     })
  }

  addMovies=(newMovie)=>{
    console.log("Let's add this movie!")
    if(!this.state.myMovies.find(movie => movie.id === newMovie.id)){
      fetch('http://localhost:3000/watch_items',{
        method:"POST",
        headers:{
          "Authorization": `Bearer ${localStorage.token}`,
          "Content-Type":"application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          watch_items: {
            movie_id: newMovie.id,
            user_id: this.state.loggedInUserId
        }
        })
      })
      .then(res=>res.json())
      .then(this.setState({
        myMovies:[...this.state.myMovies, newMovie]
      }))
      
      
    }
  }

 

  

  displayMovies = () => {
    let displayMovies = this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    
    if (this.state.filter !== "All"){
      return displayMovies.filter(movie => movie.genres.some(genre => genre.name.includes(this.state.filter)))  
    }
    return displayMovies
  }

  render(){
    console.log(this.state.allMovies)
    return (
      <React.Fragment>
        <NavBar/>
        {/* <Tron/> */}
        
          <Router>
            <Switch>
              <Route path="/login" render={(routerProps)=> <Login {...routerProps} setUser={this.setLoggedInUserId}/>}/>
              <Route path="/signup" render={(routerProps)=> <Signup {...routerProps}/>}/>
              <Route exact path="/" render={(routerProps)=> <Home {...routerProps}/>}/>
              <Route  path="/movies" render={(routerProps)=> <MoviesContainer {...routerProps}
               
              myMovies={this.state.myMovies} 
               allMovies={this.displayMovies()} 
               //allMovies={[]} 
              updateFilter={this.updateFilter} 
              handleSearch={this.handleSearch}
              addMovies={this.addMovies}
              
              />}/>

              <Route  path="/my-movies" render={(routerProps)=> <MyMovies {...routerProps}
              myMovies={this.state.myMovies} 
             
              />}/>
              <Route  component={NoMatch}/>
            </Switch>
          </Router>
        
      </React.Fragment>
    );
  }
}

export default App;

//if we could change the state in movie details and send that state up to app. js then 
//we could check the state in app.js and use a conditional statement to either send 
//my movies down as the value for the allMovies prop