import React from "react";
import { actors } from "../data";

function Actors() {
  console
  return <div>
    <h1>Actors Page</h1>
      <div>
        const actors={actors.map((actor, index) => (
          <div key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movies, moviesIndex) => (
                <li key={moviesIndex}>{movies}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  </div>;
}

export default Actors;
