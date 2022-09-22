import React from "react";
import { useParams } from "react-router-dom";

import { DogData, DogProps } from "./types";
import whiskey from "./whiskey.jpg";

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

  const image = getImage("bob");

  if (!dog) return <h2>We don't find a dog named {name}.</h2>;

  return (
    <div className="Dog">
      <h2>{dog.name}</h2>
      <img src={image} alt="dog" />
      <p>
        {dog.name} is {dog.age} years old and a genuine dog.
      </p>
      <ul className="Dog-facts">
        {dog.facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dog;
