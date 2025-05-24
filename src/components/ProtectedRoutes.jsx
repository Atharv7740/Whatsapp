import { Navigate } from "react-router-dom";
// import Home from "./Home";

function ProtectedRoutes(props){
    const isLoggedIN=props.isLoggedIN;
    // const setIsLoggedIn=props.setIsLoggedIn;
    
    if (isLoggedIN){
        return props.children;
    }
    else{
        return <Navigate to="/login"/>
    }


}
export default ProtectedRoutes;