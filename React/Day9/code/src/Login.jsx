import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("") //Error
  const handleLogin=()=>{
    // credentials
    if(username==="admin" && password==="1234"){
      navigate("/home");
    }
    else{
     setError("Wrong yser or password");  
    }
    }
  

  return(
   
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <input type="text" placeholder="Enter Username" style={styles.input} value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="Enter Password" style={styles.input} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button style={styles.button} onClick={handleLogin}>Login</button>
        {error && <p style={styles.error}>{error}</p>}
      </div>


    </div>
  )
}

 const styles={

    container:{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"linear-gradient(to right,#74ebd5,#9face6)",
    },
    card:{
      background:"#ffff",
      padding:"30px",
      width:"320px",
      borderRadius:"10px",
      textAlign:"center",

    },
    title:{
      marginBottom:"20px",
    },

   input:{
    width:"100%",
    padding:"10px",
    marginBottom:"15px",
    borderRadius:"5px",
    border:"1px solid #ccc",


   },

  button:{
    width:"100%",
     padding:"10px",
     backgroundColor:"#6c63ff",
     color:"white",
     border:"none",
     borderRadius:"5px",
     cursor:"pointer",
  },

error:{
  color:"Red",
  marginBottom:"10px",

},

hint:{
  marginTop:"15px",
  fontSize:"12px",
  color:"#522",
},
 };


 





export default Login;