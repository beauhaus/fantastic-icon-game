import React from "react";
import styled from "styled-components";
import Emoticon from "./Emoticon";

const StyledGameComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(50px, 1fr));
  margin-top: 6vh;
  & img {
    width: 50%;
    margin: 0 auto;
  }
`;
const GameComponent = props => {
  return (
    <StyledGameComponent className="game-wrapper">
      {props.gameArray.map((item, idx) => (
        <Emoticon key={item.icon_id} label={item.label} icon={item.icon} />
      ))}
    </StyledGameComponent>
  );
};

export default GameComponent;
