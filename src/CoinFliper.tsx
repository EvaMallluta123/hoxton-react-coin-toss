import { useState } from "react";

function CoinFlipper() {
    //  const state = {
    //   side: "tail",
    //   flipping: false,
    //   total: { totalCount: 0, totalTail: 0, totalHead: 0 },
    // };
    type State=[{
      side: string,
      flipping: boolean,
      total:{
        totalCount: number,
        totalTail : number,
        totalHead: number
      },
    }]
  const[state, setState]= useState<State>({
    side:"tailer",
    flipping: false,
    total: { totalCount: 0, totalTail: 0, totalHead: 0 },
  })
 
  
    return (
      <div className="App">
    
    </div>
  }

  
  export default CoinFlipper
  