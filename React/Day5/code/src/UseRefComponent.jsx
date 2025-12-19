import { useRef, useState } from "react";

function UseRefComponent()
{


//   const inputRef=useRef(null);  
//   const inputRef1=useRef(null);
//   const isFirst=useRef(true);
  

//   const Handle=()=>{
//     if(!isFirst.current){
//   inputRef.current.focus()
    
//     }
//     else{
// inputRef1.current.focus();

//     }
//     isFirst.current=!isFirst.current //true--false 
    
//   }

//   return (


//     <>
//     <input ref={inputRef}></input>
    
//     <input ref={inputRef1}></input> <br/><br/>
//     <button onClick={Handle}>Display</button> <br/>
    
    
    
//     </>
//   )


// useRef() 


//  useRef() not rerendering like usestate logic memory
// let c=0;
// const handle=()=>{
// c++;
// console.log("count:",c);
// }

// return(

// <div>
//   <button onClick={handle}>Click me</button>
// </div>


// )

// presist the value store value it will not reset on re rendering
const c=useRef(0);
const handle=()=>{
 
  c.current++;
  console.log("Ref",c.current);

}

return(


  <div>
    <button onClick={handle}>click</button>
  </div>
)






}


export default UseRefComponent;