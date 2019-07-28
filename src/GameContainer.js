import React, { Component } from "react";

// import Header from "./Header"; <Header />
import Game from "./GameComponent";
import Footer from "./Footer";
import emojiArray from "./data/emoticonDB";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playGame: false,
      gameArray: emojiArray
    };
    this.startClickHandler = this.startClickHandler.bind(this);
    this.playAgainClickHandler = this.playAgainClickHandler.bind(this);
  }
  startClickHandler() {
    this.setState(prevState => ({ playGame: !prevState.playGame }));
  }
  playAgainClickHandler() {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const newArray = shuffleArray(emojiArray);
    this.setState(prevState => ({
      gameArray: newArray
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.startClickHandler}>
          {this.state.playGame ? "END" : "PLAY"}
        </button>
        <button onClick={this.playAgainClickHandler}>sort</button>
        {this.state.playGame ? <Game gameArray={this.state.gameArray} /> : ""}
        <Footer />
      </div>
    );
  }
}

export default GameContainer;
