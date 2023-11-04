import React from "react";
import Style from "./style.module.css";
import { MenuListitem } from "../MenuListitem/MenuListitem";

export const MenuList = ({ onItemClick, difficulty }) => {
  return (
    <div className={Style.container}>
      <MenuListitem
        isSelected={difficulty === "Low"}
        onClick={onItemClick}
        difficulty="Low"
      />
      <MenuListitem
        isSelected={difficulty === "Medium"}
        onClick={onItemClick}
        difficulty="Medium"
      />
      <MenuListitem
        isSelected={difficulty === "High"}
        onClick={onItemClick}
        difficulty="High"
      />
      <MenuListitem
        isSelected={difficulty === "Insane"}
        onClick={onItemClick}
        difficulty="Insane"
      />
    </div>
  );
};
