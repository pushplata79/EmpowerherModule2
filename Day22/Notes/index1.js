function CreateMydata(){
  fetch("https://mydata-eddf1-default-rtdb.asia-southeast1.firebasedatabase.app/students.json",{method:"POST",Headers:{"content-type":"application/json"},
    body:JSON.stringify({
     name:"ani",
     rollno:1,
    }),
})
.then((res)=>res.json())
.then((data)=>console.log("post response=",data))
}


function GetMydata(){
  fetch("https://mydata-eddf1-default-rtdb.asia-southeast1.firebasedatabase.app/students/-OfTUUDLQ_BQWVRJZ7IL.json",{method:"GET",Headers:{"content-type":"application/json"},
    
})
.then((res)=>res.json())
.then((data)=>console.log("Get response=",data))
}





function UpdateMydata(){
  const name="ani"
  fetch("https://mydata-eddf1-default-rtdb.asia-southeast1.firebasedatabase.app/students/${name}.json",{
    
    method:"PUT",
    body:JSON.stringify({
      name:"nikiiiiani"
    }),
  }
    )
    .then((res)=>res.json())
    .then((data)=>console.log("put updated",data));

}


function DeleteMydata(){
  
  fetch("https://mydata-eddf1-default-rtdb.asia-southeast1.firebasedatabase.app/students/-OfTUUDLQ_BQWVRJZ7IL.json",{method:"DELETE",Headers:{"content-type":"application/json"},
    
})
.then((res)=>res.json())
.then((data)=>console.log("Deleted response=",data))
}


