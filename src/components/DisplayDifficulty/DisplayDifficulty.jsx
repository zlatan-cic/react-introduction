import React from "react";
import Style from "./style.module.css"
export const DisplayDifficulty = ({difficulty}) => {
  return (
    <div className={Style.container}>
      {
        difficulty ? `Difficulty set to ${difficulty}`: "No difficulty set"
      }
    </div>
  );
};
