# Things that includes concepts.

## Routing

1. Install React-router-dom and import it in main.jsx file.
   
   ```   
   npm i react-router-dom
   ```

    ```
    import { BrowserRouter } from 'react-router-dom'
    createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    )
    ```
2. Import routes and route from react-router-dom in app.js and create routes
   ```
   import { Routes, Route } from "react-router-dom"

   return (
   <>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/chat/:uniqueId" element={<Chat/>}></Route>
    <Route path="*" element={<PageNotFound/>}/>
   </Routes>
   
   </>
   )
   ```
3. Use  params 
   ```
   <Route path="/chat/:uniqueId" element={<Chat/>}></Route>
   import { useParams } from "react-router-dom";
   function Chat(){
        const params= useParams();
        return(
        <div> Chat:{params.uniqueId} </div>
        )
    }

    export default Chat;

   ```
4. To handle incorrect route use "*" in path and allote a compontent i.e pagenotfound.
5. Use navigation hook given by react-router dom  use to change route according to condition .
   
   {useNavigate or navigate} from rrd;
   const navigate = useNavigate();
   <navigate to =<component/>/>

   
6. Protected Routes
   1. protected routes component
   ```
   import { Navigate } from "react-router-dom";
   import Home from "./Home";
   function ProtectedRoutes(props){
    const isLoggedIN=props.isLoggedIN;
    const setIsLoggedIn=props.setIsLoggedIn;
    
    if (isLoggedIN){
        return <Home setIsLoggedIn={setIsLoggedIn}/>
    }
    else{
        return <Navigate to="/login"/>
    }
   }

   export default ProtectedRoutes;
   ```
   2. Home component
   ```
   import { useNavigate } from "react-router-dom";

   function Home(props){
    const navigate= useNavigate();
    function logoutHandler(){
       const setIsLoggedIn= props.setIsLoggedIn;
       setIsLoggedIn(false);
       navigate('/login');

    }
    
    return (<>
    <div className="w-screen h-screen bg-blue-400">
        <div className="">FLARE
            <div>This is home page</div>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300" onClick={logoutHandler}>Logout</button>
        
    </div>
   
    </>)
    }export default Home;
    ```
   3. Login Route
       ```
       import { useNavigate } from "react-router-dom";

      function Login(props){
      const {setIsLoggedIn ,isLoggedIN }=props;
    
      const Navigate= useNavigate();
    

    
         function LoginHandler(){
            console.log(isLoggedIN);
            if(!isLoggedIN){
                  setIsLoggedIn(true); 
                  console.log(isLoggedIN +"login successful");
                  Navigate('/');

                  
            }
            else{
                  console.log('Already logged in ');
            }
         
         }
         return(
            <>
            <h1>Login component</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={LoginHandler}>Login</button>
            </>
         )
         }
         export default Login;
      ```
   4. app.jsx
   
      ```
      import { Routes, Route } from "react-router-dom"
      import Chat from "./components/Chat"
      import Login from "./components/Login"
      import PageNotFound from "./components/PageNotFound"
      // import Home from "./components/Home"
      import ProtectedRoutes from "./components/ProtectedRoutes"
      import { useState } from "react"


      function App() {
      const [isLoggedIN, setIsLoggedIn]=useState(false);
      

         return (
            <>
            <Routes>
            <Route path="/" element={<ProtectedRoutes isLoggedIN={isLoggedIN} setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}  isLoggedIN={isLoggedIN}/>}></Route>
            <Route path="/chat/:uniqueId" element={<Chat/>}></Route>
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            
            </>
         )
         }

      export default App
      ```

    







