import React from "react";
function Parent(){
  const message="Hello how are you";
  return(
    <div>
      <A message={message}/>
    </div>
  );

}

function A({message}){
return(
  <div>
    <B message={message}/>
  </div>
)

}


function B({message}){
return(
  <div>
    <C message={message}/>
  </div>
)


}

function C({message}){
  return(
    <div>
      <p>Message:{message}</p>
    </div>
  )

}

export default function App(){
  return (<div>
    <Parent/> </div>

  );
}