import { isAuthenticated } from "./Auth";
import { Navigate } from "react-router-dom";


function ProtectRoute({children})
{

  if(!isAuthenticated()) 
    {
    return <Navigate to="/login"/>;
  }


  return children;


}

export default ProtectRoute;