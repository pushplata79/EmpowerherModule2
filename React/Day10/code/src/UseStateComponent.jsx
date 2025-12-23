 import { useState,useReducer } from "react";

 const initialState={
  loading:false,
  success:false,
  error:""
  
 };
  function reducer(state,action){

    switch(action.type){
      case "LOGIN":
        return {loading:true,success:true,error:""};
      case "SUCCESS":
        return {loading:false,success:true,error:""};
      case "FAIL":
        return {loading:false,success:false,error:"wrong username or password"};  
      default:
        return state;
      }

  }


export const UseStateComponent = ()=>{


  // Step 1: create states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // useReducer
  const [state,dispatch]=useReducer(reducer,initialState);  //syntax  3states

  
  // Step 2: login function
  function handleLogin() {
    dispatch({type:"LOGIN"});
           
    
    // fake login check
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        dispatch({type:"SUCCESS"});
          } else {
            dispatch({type:"FAIL"})
         }
    }, 1000);
  }

  // Step 3: UI
  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h3>Login</h3>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>   

      <br /><br />

      {state.loading && <p>Loading...</p>}
      {state.success && <p>Login Successful ✅</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}


 

