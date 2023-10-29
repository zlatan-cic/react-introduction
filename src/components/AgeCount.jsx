import React, { useState } from "react";
import AgeDisplay from "./AgeDisplay";

const AgeCount = () => {
  const [age, setAge] = useState(24);

  const increaseAge = () => {
    setAge(age + 1);

  };
  return (
    <div>
      <button onClick={increaseAge}>Increase age</button>
      <AgeDisplay age={age}/>
    </div>
  );
};

export default AgeCount;
