import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Chat from "./components/Chat";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useState } from "react";


function app(){
    const [isLoggedIN, setIsLoggedIn]=useState(false);
  
    return (
    <div className="flex flex-col items-center text-center">
   
    {/* <div className="text-5xl font-semibold font-serif text-amber-500">FLARE</div> */}

    <Routes>
        <Route path="/" element=
             {<Home setIsLoggedIn={setIsLoggedIn}/>} />
            {/* {<ProtectedRoutes isLoggedIN={isLoggedIN} setIsLoggedIn={setIsLoggedIn}>
            </ProtectedRoutes>}/> */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}  isLoggedIN={isLoggedIN}/>}></Route>
        <Route path="/chat/:userId" element={<Chat></Chat>}/>
        <Route path="*" element={<PageNotFound/>}/>
      
    </Routes>

    </div>
    )

}
export default app;