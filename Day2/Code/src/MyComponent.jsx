import React,{useState} from "react";
function MyComponent(){

const [name,setName]=useState("mahalakshmi");
const [age,setAge]=useState(0);
const [isemployed,setEmploy]=useState(false)

const updateName=()=>{
   setName("mini");
}
const increment=()=>{
  setAge(age+1)
}
const toggleEmployee=()=>{
  setEmploy(!isemployed)
}
return(
  <div>
    Name:{name}
    <button onClick={updateName}>Set Name</button>
    Age:{age}
    <button onClick={increment}>Incre</button>
    Is employed:{isemployed?"yes":"no"}
    <button onClick={toggleEmployee}>toggle</button>

    
  </div>
)

}

export default MyComponent;