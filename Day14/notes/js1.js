
// 1.breakfast
//2.clean kitchen
//3.take out trash

function breakfast(){
  
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const breakkfst=false;
          if(breakkfst){
            resolve("done with breakfast");
        
          }
          else{
            reject("didn't");
          }
          
            
      }, 1500);
      
      });
}
function cleankitchen(){
  return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
      const cleankit=false;
      if
      resolve("clean the kitchen");
  
      }, 3500);
  });
  
}
  function takeouttrash(){
    return new Promise((resolve,reject)=>{

  setTimeout(()=>{resolve("take out dustbin");
  
      }, 500);
});

}


breakfast().then(value=>{console.log(value); return cleankitchen()})
           .then(value=>{console.log(value); return takeouttrash()})
           .then(value=>{console.log(value); console.log("yoo finished")})
           .catch(error=>console.error(error)); 
           
