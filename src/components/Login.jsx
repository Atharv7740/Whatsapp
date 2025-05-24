import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth,db } from "../../Firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
import { useEffect } from "react";

function Login(props) {
  const {setIsLoggedIn ,isLoggedIN }=props;
    
    const Navigate= useNavigate();
  
    async function createUser(authData) {
      const{uid,displayName,email,photoURL}=authData.user;
      await setDoc(doc(db,"users",uid),{
        name:displayName,
        email,
        profile_pic:photoURL,
        
      })
    
      
    }
    

    
    async function LoginHandler(){
        const result = await signInWithPopup(auth,new GoogleAuthProvider());
        await createUser(result); 
        setIsLoggedIn(true);
        console.log("result",result);
        Navigate('/');
    }
  return (
    <div className="flex flex-col  h-screen font-serif w-[100%]">
      {/* <div className="text-lg font-semibold">Login component</div> */}
      <div className="flex items-center w-[100%] h-[20%] bg-blue-200 ">
        <div className="flex items-center ml-73 mb-10">
          <img
            src="/F_icon_transparent.png"
            alt="Flare Logo"
            className="w-8 h-8"
          />
          <div className="text-bold text-2xl font-serif uppercase ">Flare</div>
        </div>
      </div>
      <div className="h-[80%] bg-white flex items-center justify-center relative">
        <div className="bg-white h-[70%] w-[60%] shadow-lg flex flex-col justify-center gap-[30px] items-center fixed top-25">
          <img src="image.png" alt="" className="h-[80px] w-[80px]"/>
          
          <h1 className="text-2xl font-semibold">Sign In</h1>
          <p className="text-center text-neutral-400 text-[12px]">Sign in with your google account <br /> Begin exciting conversation with your friends</p>
          <button onClick={LoginHandler} className="bg-[#365da1] rounded-[10px] p-[8px]">Sign in with Google [-]</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default Login;


   
