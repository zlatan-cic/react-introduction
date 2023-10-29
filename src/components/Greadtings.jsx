import React from "react";

const Greadtings = ({ firstName, lastName, age, car, picture }) => {
  
  return (
    <div>
      <h1>
        HI {firstName} {lastName} you are {age} years old
      </h1>
      <h2>
        My car is {car.brand} colour {car.color}
      </h2>
      <div>
        <img src={picture} />
      </div>
    </div>
  );
};

export default Greadtings;
