import React from "react";
import { directors } from "../data";

function Directors() {
console.log(directors)
  return <div>
    <h1>Directors Page</h1>
      <div>
        const list={directors.map((director, index) => (
          <div key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, movieIndex) => (
                <li key={movieIndex}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>;
}

export default Directors;
