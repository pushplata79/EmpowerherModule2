import express from "express"
//import {readFileSync, writeFileSync} from "fs";
const app=express();

app.use(express.json());

// function readData(){
//   const data=readFileSync("db.json","utf-8");
//   return JSON.parse(data)
// }

// function writeData(data){
//   writeFileSync("db.json",JSON.stringify(data,null,2));
// }

// // add user

// app.post("/users",(req,res)=>{
//   const data=readData();
//   data.users.push(req.body);  //postman
//   writeData(data);
//   res.send("user added");
// })

// app.get("/users/:id",(req,res)=>{   // dynamic routing
//   const data=readData()
//   const user=data.users.find(u=>u.id==req.params.id)    //:/id true
//   if(!user) return res.send("user not found") //false
//   res.send(user);  
// })

// app.put("/users/:id",(req,res)=>{   // dynamic routing
//   const data=readData()
//   const user=data.users.find(u=>u.id==req.params.id)    //:/id true
//   if(!user) return res.send("user not found") //false
//   user.name=req.body.name;  //postman
//   writeData(data)
//   res.send("user updated")
// })

// app.delete("/users/:id",(req,res)=>{
//   const data=readData();
//   data.users=data.users.filter(u=>u.id!=req.params.id) 
//   writeData(data)
//   res.send("user deleted")
// })



/* Sample Data */
const users = [
  { id: 1, name: "Amit", age: 25, active: true },
  { id: 2, name: "Ravi", age: 30, active: false },
  { id: 3, name: "Neha", age: 22, active: true },
  { id: 4, name: "Sumit", age: 28, active: true },
  { id: 5, name: "Pooja", age: 35, active: false }
];

/*
 GET /users
 Query Params:
 ?active=true        -> Filtering
 ?sort=asc|desc      -> Sorting by age
 ?page=1&limit=2     -> Pagination
 ?search=amit        -> Searching by name
*/
app.get("/users", (req, res) => {
  let result = [...users]; // copy array

  /* FILTERING */
  if (req.query.active) {
    const isActive = req.query.active === "true";
    result = result.filter(user => user.active === isActive);
    res.send(result)
    
  }

  // /* SEARCHING */
  // if (req.query.search) 
  //   {
  //   const search = req.query.search.toLowerCase();
  //   result = result.filter(user =>
  //     user.name.toLowerCase().includes(search)
  //   );
  // }

  // /* SORTING */
  // if (req.query.sort === "asc") {
  //   result.sort((a, b) => a.age - b.age);
  // }
  // if (req.query.sort === "desc") {
  //   result.sort((a, b) => b.age - a.age);
  // }

  // /*PAGINATION */

  // const page = Number(req.query.page) || 1;
  // const limit = Number(req.query.limit) || result.length;

  // const start = (page - 1) * limit;
  // const end = page * limit;

  // const paginatedResult = result.slice(start, end);

  
});





  app.listen(3000,()=>{
  console.log("server started")
})
