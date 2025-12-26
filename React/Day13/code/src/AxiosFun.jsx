
import axios from "./Axios";
import { useEffect, useState } from "react";

function AxiosFun(){
  const [products,setProduct]=useState([]);
  const [error,setError]=useState("")
  useEffect(()=>{

    axios.get("/products")
    .then((response)=>setProduct(response.data.products))
    .catch((error)=>setError(error.message))
  },[]);


//





return(

  <>
  {products.map((product,index)=>{  //key
    return(
      <h2 key={index}>{product.title}-{index}-{product.brand}</h2>
    )
  })}
  
  </>
)
}
export default AxiosFun;