import React from "react";

export const Car = ({onCarClick}) => {

  const click = () => {
    onCarClick("hahaha")
  }
  return (
    <div>
      <h2 onClick={click}>I am The {"<Car/>"}</h2>
    </div>
  );
};
