// import Greadtings from "./components/Greadtings";

import { Car } from "./components/Car/Car";



function App() {

  const hello = (value) => {
    alert("Hello from <App/>" + value)
  }
  return(
    <div>
      <h1 onClick={hello}>I am the {"<App/ >"}</h1>
      <Car onCarClick={hello}/>
    </div>
  )
}

export default App;
