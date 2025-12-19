import { Link, useParams } from "react-router-dom";

function User(){
  const {id}=useParams();
  return(


    <>
<nav>
  <ul>
  
    <li>
      <Link to="/user/1">User 1</Link>
    <Link to="/user/2">User 2</Link>
    <Link to="/user/3">User 3</Link>
   
    </li>
  </ul>
</nav>


    
<h2>welcome to my profile section</h2>
<p>User ID from Url:{id}</p>
   </>
  )
}

export default User;