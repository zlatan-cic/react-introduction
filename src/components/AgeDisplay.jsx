import React from "react";

const AgeDisplay = ({age}) => {
  return (
    <div>
      <h2>You are {age} years old</h2>
      <h1>{age >= 30 && "ahahahaha"}</h1>
    </div>
  )
};

export default AgeDisplay;
