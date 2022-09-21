import React from "react";
import * as whiskey from "./whiskey.jpg";

function DogList(): JSX.Element {
  return (
    <div className="DogList">
      All dogs
      <img src={whiskey.default} alt="" />
    </div>
  );
}

export default DogList;
