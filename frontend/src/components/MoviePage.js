import React from 'react'

const MoviePage = (props) => {
    const { title, director, plot, poster_url } = props.selectedMovie

    return (
        <div>
            <h1>{title}</h1>
            <h3>{director}</h3>
            <img src={poster_url}></img>
            <p>{plot}</p>
        </div>
    )
}

export default MoviePage