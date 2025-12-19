import { useContext } from "react";
import { usercontext } from "./ComponentA";


function ComponentD(){
const user=useContext(usercontext)
return(
  <div className="box">
    <h1>ComponentD</h1>
    <h2>{`i like the course from ${user}`}</h2>
     </div>
)

}

export default ComponentD;