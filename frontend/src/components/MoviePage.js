import React from "react";
import ReviewForm from "../ReviewForm";

const MoviePage = (props) => {
  const { title, director, plot, poster_url, reviews } = props.selectedMovie;
  console.log(props);
  return (
    <div>
      <h1>{title}</h1>
      <h3>{director}</h3>
      <img src={poster_url}></img>
      <p>{plot}</p>
      
      <ul>
        {reviews.map((review) => {
          return (
            <p>
              {review.content}-{review.username}
            </p>
          );
        })}
      </ul>
      <ReviewForm/>
    </div>
  );
};

export default MoviePage;
