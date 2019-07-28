import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import GameContainer from "./GameContainer";

function App() {
  return (
    <div className="App">
      <GameContainer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/* <Header />
<Game />
<Foot /> */
