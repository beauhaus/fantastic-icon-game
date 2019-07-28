import React from "react";
import styled from "styled-components";

import Emoticon from "./Emoticon";

const StyledGameComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(50px, 1fr));
`;

var emojiArray = [
  {
    icon_id: 0,
    label: "Grinning Face",
    icon: "😀"
  },
  {
    icon_id: 1,
    label: "Grinning Face With Big Eyes",
    icon: "😃"
  },
  {
    icon_id: 2,
    label: "Grinning Face With Smiling Eyes",
    icon: "😄"
  },
  {
    icon_id: 3,
    label: "Beaming Face With Smiling Eyes",
    icon: "😁"
  },
  {
    icon_id: 4,
    label: "Grinning Squinting Face",
    icon: "😆"
  }
];

const GameComponent = () => {
  return (
    <StyledGameComponent className="game-wrapper">
      {emojiArray.map((item, idx) => (
        <Emoticon key={item.icon_id} label={item.label} icon={item.icon} />
      ))}
    </StyledGameComponent>
  );
};

export default GameComponent;
