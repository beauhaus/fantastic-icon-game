import React from "react";
import ReactDOM from "react-dom";

import Game from "./GameComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
