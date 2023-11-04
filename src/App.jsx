import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import { MenuListitem } from "./components/MenuListitem/MenuListitem";

import Style from "./style.module.css";
function App() {
  const [currentDifficulty, setCurentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    setCurentDifficulty(difficulty);
  };

  // test

  return (
    <div>
      <div>
        <h1>Select your React Difficulty</h1>
        <div className={Style.workspace}>
          <MenuList onItemClick={onMenuListItemClick} difficulty={currentDifficulty} />
          <DisplayDifficulty difficulty={currentDifficulty} />
        </div>
      </div>
    </div>
  );
}


export default App;
