import React from "react";
import styled from "styled-components";

const FancyFruit = styled.div`
  border: 1px solid red;
`;
const Fruits = () => {
  console.log("fruits ran!");
  return (
    <div className="fruits-comp">
      <FancyFruit>🍎</FancyFruit>
      <FancyFruit>🍊</FancyFruit>
      <FancyFruit>🍓</FancyFruit>
      <FancyFruit>🐜</FancyFruit>
    </div>
  );
};

export default Fruits;
