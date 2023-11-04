import React, { useState } from "react";
import Style from "./style.module.css";

export const MenuListitem = ({ difficulty, onClick, isSelected }) => {
  const [isHovered, setisHovered] = useState(false);

  const activate = () => {
    setisHovered(true);
  };

  const deactivate = () => {
    setisHovered(false);
  };

  // console.log("is Hoverd", isHovered);

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#818cf8";
    } else {
      if (isSelected) {
        return "#26baea";
      } else {
        return "#d6d3d1";
      }
    }
  };

  const onItemClick = () => {
    onClick(difficulty);
  };
  return (
    <div
      className={Style.container}
      onClick={onItemClick}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to : {difficulty}
    </div>
  );
};
