import React from "react";
import { Link, useParams } from "react-router-dom";

import { DogData, DogProps } from "./types";

function getImage(src: string) {
  try {
    return require(`./${src}`);
  } catch {
    console.log("Image not found.");
  }
}

function Dog({ dogs }: DogProps): JSX.Element {
  const { name } = useParams();
  const dog = dogs.filter(
    (d) => d.name.toLowerCase() === name?.toLowerCase()
  )[0];

  const image = getImage(dog.src);

  if (!dog) return <h2>We didn't find a dog named {name}.</h2>;

  return (
    <div className="Dog">
      <h2>{dog.name}</h2>
      <img src={image} alt="dog" />
      <p>
        {dog.name} is {dog.age} years old and a genuine dog.
      </p>
      <ul className="Dog-facts">
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Back to list</Link>
    </div>
  );
}

export default Dog;
