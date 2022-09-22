import React from "react";
import { Link } from "react-router-dom";

import "./DogList.css";

import { DogProps } from "./types";

function DogList({ dogs }: DogProps): JSX.Element {
  return (
    <div className="DogList">
      <h2>All dogs</h2>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={dog.name}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
