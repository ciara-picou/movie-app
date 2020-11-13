



import React, {Component} from 'react'
import{ Button } from 'react-bootstrap';

class MovieDetails extends Component{
    
    displayMyMovies=()=>{this.props.history.push("/my-movies")}
    
    
    render() {
        return (
    <div className="card">
        <h2>{this.props.movie.title}</h2>
        <p>{this.props.movie.plot}</p>
        <p>{this.props.movie.runtime}</p>
        <p>{this.props.movie.director}</p>
        <p>{this.props.movie.actors}</p>
        <p>{this.props.movie.year}</p>
{/*       Button onClick={()=>this.displayMyMovies}className="go-to-watchlist-btn">Go To My Movies</Button>   */}
     
    </div>
        )
    }
}
    export default MovieDetails
//We want the user to be redirected to their MyMovies list when they click this button
    
//example of a redirect
//const handleSignup=()=>{props.history.push("/signup")}


//example of a movie object
// "id": 137,
// "title": "Spotlight",
// "year": "2015",
// "runtime": "128",
// "genres": [
//     "Biography",
//     "Crime",
//     "Drama"
// ],
// "director": "Tom McCarthy",
// "actors": "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber",
// "plot": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
// "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg",
// "mood": "🎭"







