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

  // more = () => {
  //   let newDisplayIndex = this.state.displayIndex + 4

  //   if(newDisplayIndex >= this.props.allMovies.length){
  //     newDisplayIndex = 0
  //   }

  //   this.setState({
  //     displayIndex: newDisplayIndex
  //   })
  // }

  //I am trying to write a function that will dynamically generate a grid of movie cards
  displayFourMovies = () => {
    return this.props.allMovies.slice(
      this.state.displayIndex,
      this.state.displayIndex + 4
    );
  };

  generateGrid() {
    let someMovies = this.displayFourMovies();
    return someMovies;
    // for(let i=0; i < someMovies.length; i++){
    //  console.log(someMovies[i].title)
    // }
  }

  render() {
    return (
      // The code below is not stylish but it is functional:
      // <div>
      //   <h1>Movies List</h1>
      //   <Search
      //     updateFilter={this.props.updateFilter}
      //     handleSearch={this.props.handleSearch}
      //   />
      //   {localStorage.token ? (
      //     this.props.allMovies.map((movie) => {
      //       return <Movie movie={movie} addMovies={this.props.addMovies} />;
      //     })
      //   ) : (
      //     <h4>Please Log In</h4>
      //   )}
      // </div>

      // <div>
      //   <h1>Movies List</h1>
      //   <Search
      //     updateFilter={this.props.updateFilter}
      //     handleSearch={this.props.handleSearch}
      //   />
      //   <Row>
      //     {localStorage.token ? (
      //       this.generateGrid().map((movie) => {
      //         return (
      //           <Col>
      //             <Movie history={this.props.history} movie={movie} addMovies={this.props.addMovies} />
      //           </Col>
      //         );
      //       })
      //     ) : (
      //       <h4>Please Log In</h4>
      //     )}
      //   </Row>
      // </div>

    <div>
    <h1>Movies List</h1>
    <Search
      updateFilter={this.props.updateFilter}
      handleSearch={this.props.handleSearch}
    />
      {localStorage.token ? (
      <div className='movies-container'>
        {this.props.allMovies.map(movie => {
          return (
              <Movie className='movie' history={this.props.history} movie={movie} addMovies={this.props.addMovies} select={this.props.selectMovie} />
          );
        })}
        </div>
      ) : (
        <h4>Please Log In</h4>
      )}
    </div>

      // <div>
      //   <h1>Movies List</h1>
      //   <Search
      //     updateFilter={this.props.updateFilter}
      //     handleSearch={this.props.handleSearch}
      //   />
      //   {localStorage.token ? (
      //     // this.props.allMovies.map((movie) => {
      //       return (
      //         <div className="subject">
      //           {/* <Row>
      //             <Col> */}
      //           {/* <Movie movie={movie} addMovies={this.props.addMovies} /> */}
      //           {/* </Col> */}
      //           {/* <Col>
      //             <Movie movie={movie} addMovies={this.props.addMovies} />
      //           </Col>
      //           <Col>
      //             <Movie movie={movie} addMovies={this.props.addMovies} />
      //           </Col>
      //           <Col>
      //             <Movie movie={movie} addMovies={this.props.addMovies} />
      //           </Col> */}
      //           {/* </Row> */}
      //         </div>
      //       );
      //     })
      //   ) : (
      //     <h4>Please Log In</h4>
      //   )}
      // </div>
    );
  }
}

// {this.props.myMovies.map(movie => {
//   return <MyMovies movie={movie}  />
// })}

//We currently have no way of telling MoviesContainer whether it should be rendering allMovies or MyMovies
