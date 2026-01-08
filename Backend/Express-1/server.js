import express from "express"; 
const app=express()   // create express application
app.get("/home",(req,res)=>{
  res.send(`<h3 style="color:red">this is my home page</h3>`)
})
app.get("/contact",(req,res)=>{
  res.json({message:"this is my contac page home page"})
})
app.get("/blog",(req,res)=>{
  res.send("this is my blog wala  home page")
})

const port=2000;
app.listen(port,()=>{
  console.log('Server running')
})
