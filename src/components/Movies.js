import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        const list={movies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <p>Time: {movie.time}</p>
            <ul>
              {movie.genres.map((genre, genreIndex) => (
                <li key={genreIndex}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
