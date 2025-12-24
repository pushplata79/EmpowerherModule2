import { useState,useMemo } from "react";

function Counter(){
const [counterOne,setCounterOne]=useState(0)
const [counterTwo,setCounterTwo]=useState(0)
const incrementOne=()=>{
  setCounterOne(counterOne+1)

}


const incrementTwo=()=>{
  setCounterTwo(counterTwo+1)
}

const isEven=useMemo(()=>{
  let i=0;
  while(i<10000000000) //delay
    {
    i++;
    } 
  return counterOne%2===0
}
,[counterOne])

  return(
     <div>
      <div><button onClick={incrementOne}>Counter One-{counterOne}</button>
      <span>{isEven?'Even':'ODD'}</span>
      </div>
      <div><button onClick={incrementTwo}>Counter Two-{counterTwo}</button></div>
     </div>

  )

}

export default Counter;