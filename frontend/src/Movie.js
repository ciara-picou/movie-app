
import React from "react"
import MovieDetails from './components/MovieDetails'
import{ Card, Button } from 'react-bootstrap';


//export const Movie = (props) => {
  class Movie extends React.Component{
  
    state={
      isClicked:false
    }

    showDetails=()=>{
      console.log("I've been clicked!")
      this.setState({isClicked: !this.state.isClicked})
    }

    moviePageClick = () => {
      this.props.select(this.props.movie)
      this.props.history.push('/moviepage')
    }

         render(){
          return(
            <Card style={{ width: '18rem' }} id="movies" >
          <Card.Img variant="top" src={this.props.movie.poster_url} />
          <Card.Body>
          <Card.Title>{this.props.movie.title}</Card.Title>
          <Card.Text>
            
          </Card.Text>
          {this.state.isClicked ? <MovieDetails movie={this.props.movie} addMovies={this.props.addMovies}/> : null}
        <Button variant="secondary" onClick={this.showDetails}>Movie Details</Button>
        <Button style={{margin: '5px'}}variant="primary" onClick={this.moviePageClick}>Movie Page</Button>
     </Card.Body>
    </Card>
          )
      }
    }
   export default Movie     


            // <div>
            //     <h2>{this.props.movie.title}</h2>
            //     <img src={this.props.movie.poster_url} alt={this.props.movie.title} className="movie-image" width="400"/> 
            //     {this.state.isClicked ? <MovieDetails movie={this.props.movie} addMovies={this.props.addMovies}/> : null} 
            //      <button onClick={this.showDetails} className="movie-details">Movie Details</button> 
            //   </div>

    
  
    

// "id": 1,
// "title": "Beetlejuice",
// "year": "1988",
// "runtime": "92",
// "genres": [
//     "Comedy",
//     "Fantasy"
// ],
// "director": "Tim Burton",
// "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
// "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
// "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"




// showDetails=()=>{
//   console.log("I've been clicked!")
//   this.setState({isClicked: !this.state.isClicked})
// }
    
// <div className="card">
//     <h2>{this.props.movie.title}</h2>
//     <img src={this.props.movie.poster_url} alt={this.props.movie.title} className="movie-image" width="400"/>
//     {this.state.isClicked ? <MovieDetails movie={this.props.movie} addMovies={this.props.addMovies}/> : null}
//     <button onClick={this.showDetails}className="movie-details">Movie Details</button>
// </div>



