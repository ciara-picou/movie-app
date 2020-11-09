import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  Home  from './Home';
import { MyMovies } from './MyMovies';
import { Movie } from './Movie';
import { MoviesContainer } from './MoviesContainer';
import { NoMatch } from './NoMatch';
import {Layout}  from './components/Layout';
import {NavBar} from './components/NavBar';
import Tron from './components/JumboTron';

class App extends Component {

  render(){
    return (
      <React.Fragment>
        {/* <NavBar/> */}
        {/* <Tron/> */}
        
          <Router>
            <Switch>
              <Route exact path="/" component={()=> <Home/> }/>
              <Route  path="/movies" component={MoviesContainer}/>
              <Route  path="/my-movies" component={MyMovies}/>
              <Route  component={NoMatch}/>
            </Switch>
          </Router>
        
      </React.Fragment>
    );
  }
}

export default App;
