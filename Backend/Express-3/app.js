import express from "express"
import rateLimit from "express-rate-limit"
const app=express()

const l=rateLimit({
  windowMs:1*60*1000,
  max:2,
  message:{
    status:429,
    error:"too many requests"
    
    
  }
})

app.use(l)

app.get("/",(req,res)=>{
  res.send("home page");
})

app.get("/user",(req,res)=>{
  res.json([
    {id:1,name:"ani"},
    {id:2, name:"Rini"}
  ])
})

app.listen(4000,()=>{
  console.log("hiiiii i am server")
})