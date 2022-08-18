import { useState } from 'react'
import './App.css'
type State= {
side: string;
flipping: boolean;
totalCount: number;
totalTail: number;
totalHead: number;}
function App() {
const [state, setState ]=useState<State[]>(
  [{
    side: "monedhë",
    flipping: false,
    totalCount: 0,
     totalTail: 0, 
     totalHead: 0 

  }
  ]
)
function Flipping(){
   
}

  return (
    <div className="App">
      {state.map( index=>(
      <form onClick={function Flip(){
        index.totalCount++
        let oneOrZero = Math.random();
        if(oneOrZero<0.5){
          oneOrZero=0
          setState({ side: "head" });
      index.totalHead++
        }
        else {
          oneOrZero = 1;
          setState({ side: "tail" });
          index.totalTail++;
        }
        setState({ flipping: true });
        setTimeout(() => setState({ flipping: false }), 1000);
      }
      }>
     <h1>Hidh Monedhën</h1>
     <img src='src\img\kokë.png'/>
     <p>kokë</p>
     <img src='src\img\pil.png'/>
     <p> pil</p>
     <button>Hidh</button>
     </form>
      ))}
          </div>
  )
}

export default App
