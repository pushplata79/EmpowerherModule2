import { Link } from "react-router-dom";

function Contact(){
  return(


    <>
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
            <Link to="/user">User</Link>


    </li>
  </ul>
</nav>


    
<h2>my Contact section</h2>
   </>
  )
}

export default Contact;