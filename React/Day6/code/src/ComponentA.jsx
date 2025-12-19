import { useState,createContext } from "react";
import ComponentB from "./ComponentB";
export const usercontext=createContext();
function ComponentA(){
  const [user,setUser]=useState("pushplatamasai");
  


return(
  <div className="box">
    <h1>ComponentA</h1>
    <h2>{`hello wecome to ${user}`}</h2>
    {/* without prop statement */}

    <usercontext.Provider value={user}>

    <ComponentB/> 

    </usercontext.Provider>


  </div>
)

}

export default ComponentA;