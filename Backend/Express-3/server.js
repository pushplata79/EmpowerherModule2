import express from "express";
const app=express();
app.use(express.json())

// middleware
const checkData=(req,res,next)=>{
  if(req.body.name && req.body.age){
   next();  //allow request 
  }
  else{
    res.status(400).json({message:"invalid data ....."})
  }
}
app.get("/todos",(req,res)=>{
  res.json({message:"get all todos"})
})

app.post("/todos",checkData,(req,res)=>{
  res.json({message:"todo added",data:req.body})
})



app.listen(3000,()=>{
  console.log("server running")
})