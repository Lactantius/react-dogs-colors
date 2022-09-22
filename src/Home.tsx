import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home(): JSX.Element {
  return (
    <div className="Home">
      <h2>Dogs and Colors</h2>
      <p>
        This is a very useful web app if you need to{" "}
        <Link to="/dogs">look up information about fictional dogs</Link> or use
        a <Link to="/colors">rather inefficient color picker</Link>. Have fun!
      </p>
    </div>
  );
}

export default Home;
