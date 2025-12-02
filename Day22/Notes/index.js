function CreateData(){
   fetch("https://students-47fd3-default-rtdb.asia-southeast1.firebasedatabase.app/students.json",{method:"POST",body:JSON.stringify({
    name:"anik",
    rollno:2,
   })
  })
  .then((res)=>res.json())
  .then((data)=>console.log("Data is add",data))
}
function GetData(){
  fetch("https://students-47fd3-default-rtdb.asia-southeast1.firebasedatabase.app/students.json",{method:"GET"})
  .then((res)=>res.json())
  .then((data)=>console.log("get the data",data))

  
}
function UpdateData(){
  fetch("https://students-47fd3-default-rtdb.asia-southeast1.firebasedatabase.app/students/-OfUQQCImuRdAMd3o78k.json",{method:"PUT",
    body:JSON.stringify({
      name:"MahaLakshmi",
      rollno:5
    }),
  })
  .then((res)=>res.json())
  .then((data)=>console.log("updated using PUT",data));
  
}
function DeleteData(){
  fetch("https://students-47fd3-default-rtdb.asia-southeast1.firebasedatabase.app/students/-OfUR9HUEqH8abY4OMBN.json",{method:"DELETE"})
  .then((res)=>res.json())
  .then((data)=>console.log("deleted record",data))

}


