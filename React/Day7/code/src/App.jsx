// Routing in React

// SPA --page does not reload only component change
//how to we show different pages like home login contact 

// Routing

//  / home
//  /about about section
// URL change component change page will same

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NotFound from "./NotFound";
import User from "./User"

function App(){
return(

  <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<Home/>}/>
  <Route path="about" element={<About/>}/>
<Route path="contact" element={<Contact/>}/>
<Route path="user" element={<User/>}/>
<Route path="user/:id" element={<User/>}/>
<Route path="*" element={<NotFound/>}/>


  <Route/>


  </Routes>
  
  
  </BrowserRouter>

)
}

export default App;