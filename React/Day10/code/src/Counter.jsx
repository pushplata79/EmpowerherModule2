import { useReducer } from "react";

const initialState=90;

function counterReducer(state,action){


if(action==="INCREMENT"){
  return state+1;
}
if(action==="DECREMENT"){
  return state-1;
}
if(action==="RESET"){
  return 0;
}
return state;

}

function Counter(){

  const [count,dispatch]=useReducer(counterReducer,initialState);
  return(
  <div style={{textAlign:"center",marginTop:"50px"}}>
    <h1>Count:{count}</h1>
    <button onClick={()=>dispatch("INCREMENT")}>Increase</button>
    <button onClick={()=>dispatch("DECREMENT")}>Decrease</button>
    <button onClick={()=>dispatch("RESET")}>Reset</button>
  </div>

  )


}

export default Counter;