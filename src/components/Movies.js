import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  //   console.log(props.movies);
  return (
    <div className="movies-list">
      {props.movies.map((item) => {
        console.log(item);
        return <Movie image={item} />;
      })}
    </div>
  );
};

export default Movies;
