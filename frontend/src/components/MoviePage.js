import React from "react";
import ReviewForm from "../ReviewForm";

const MoviePage = (props) => {
  // const {
  //   title,
  //   director,
  //   plot,
  //   poster_url,
  //   reviews,

  // } = props.selectedMovie;
  console.log(props);
  return (
    <div>
      <h1>{props.selectedMovie.title}</h1>
      <h3>{props.selectedMovie.director}</h3>
      <img src={props.selectedMovie.poster_url}></img>
      <p>{props.selectedMovie.plot}</p>

      <ul>
        {props.selectedMovie.reviews.map((review) => {
          return (
            <p>
              {review.content}-{review.username}
            </p>
          );
        })}
      </ul>
      <ReviewForm movie={props.selectedMovie} newReview={props.newReview} />
    </div>
  );
};

export default MoviePage;
