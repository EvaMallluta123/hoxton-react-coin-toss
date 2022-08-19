import { useState } from "react";
import "./App.css";

function App() {
  const [face, setFace] = useState("tails");
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  function FlipCoin() {
    const newFace = Math.random() > 0.5 ? "heads" : "tails";
    if(newFace==="heads")setHeadCount(headCount+1)
    if(newFace==="tails")setTailCount(tailCount+1)

    setFace(newFace);
  }
  function Reset(){
    setHeadCount(0)
    setTailCount(0)
  }
  return (
    <div className="App">
     <img src={face==="tails"? "src/img/pil.png": "src/img/kokë.png"}/>
      <h2>HeadCount:{headCount}</h2>
      <h2>TailCount:{tailCount}</h2>

      <button onClick={FlipCoin}>Flip</button>
      <button onClick={Reset}>Reset</button>

      <img src="" alt="" />
    </div>
  );
}

export default App;
