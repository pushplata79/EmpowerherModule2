import { useMemo, useState } from "react";

function Loop(){
  const [bgColor,setBgColor]=useState("green");  //bgcolor=""
  const [number,setNumber]=useState(0);
  function toggleColor(){  //button
    setBgColor(bgColor==="green"?"Lightgreen":"green");
  }

  function handleChange(e){
    setNumber(Number(e.target.value));
  }

const t=useMemo(()=>{
  let s=0;
 for(let i=number;i<1000;i++){
  s+=i;
  console.log(i)
},[number]);

 
 

return(
 <div style={{padding:"20px"}}>
  <div style={{backgroundColor:bgColor,padding:"20px",width:"220px",borderRadius:"10px"}}>
 <input type="number" placeholder="Enter number" value={number} onChange={handleChange}/>

  </div>
  <button onClick={toggleColor}>Toggle my Div Color</button>
 <p>Entered number :{number}</p>
 <p>Loop Result:{t}</p>
 </div>
 
)
}
export default Loop;