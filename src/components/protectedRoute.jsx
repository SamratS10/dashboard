import {Navigate,Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({children}) => {
  const token = Cookies.get("token");
  if(token===undefined){
    return <Navigate to="/" replace={true}/>
  }
  return children
};

export default ProtectedRoute;