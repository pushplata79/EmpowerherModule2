import express from "express"
const app= express()
app.use(express.urlencoded({extended:true})) //middleware
app.get("/",(req,res)=>{

  res.send(`<h2>User Form</h2>
    <form method="POST" action="/submit">
    <input type="text" name="name" placeholder="enter the name"/><br>
    <input type="number" name="age" placeholder="enter the age"/><br>
    <button type="submit">Submit</button>
    </form>
    
    
    
    
    `)
})

app.post("/submit",(req,res)=>{
  console.log(req.body)
  res.send(`Form received :${JSON.stringify(req.body)}`)
})


app.listen(3000,()=>{
  console.log("Server running")
})