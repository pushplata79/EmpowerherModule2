import axios from "./Axios";
function FirebaseAxios(){


  
  axios.put("/student/-OhQIPVW8-GdaAIdY4QV",{
    name:"Anikkk",
    course:"Reacttttt",
    age:21
  })
  .then(response=>{
    console.log("Data added",response.data);
  })
  .catch(error=>{
    console.log("wrong site",error);
  });
  





}


export default FirebaseAxios;