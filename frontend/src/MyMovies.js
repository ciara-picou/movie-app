import React from "react"

//export const MyMovies = (props) => {
export const MyMovies = (props) => {

  
  return(
    <div>
        <h1>My Movies!</h1>
        <div className="card">
        <h2>{props.movie.title}</h2>
        <img src={props.movie.poster_url} alt={props.movie.title} className="movie-image" width="400"/>
        <button onClick={null}className="learn-more-btn">Movie Details</button>
    </div>
    </div>
  )
}


export default MyMovies