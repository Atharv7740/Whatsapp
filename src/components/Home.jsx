import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, storage } from "../../Firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import ChatPannel from "./ChatList";
import Profile from "./UserPannelHeader";
import { useState } from "react";
import UserPannel from "./UserPannel";

function Home(props) {
  const navigate = useNavigate();
  async function logoutHandler() {
    await signOut(auth);
    const setIsLoggedIn = props.setIsLoggedIn;
    setIsLoggedIn(false);
    navigate("/login");
  }
  function changeHandler(e) {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const storageRef = ref(storage, "/profile" + Math.random());
    const taskUpload = uploadBytesResumable(storageRef, file);
    taskUpload.on("download", progressCB, errorCB, finishCB);
    function progressCB(data) {
      console.log(data);
    }
    function errorCB(err) {
      console.log(err);
    }
    function finishCB() {
      console.log("sucessfully uploaded");
    }
  }

  return (
    <>
      <div className="w-full h-screen relative">
        <div className="w-[95%] h-[90%] bg-white fixed top-10 left-10 flex shadow-2xl shadow-zinc-500">
          <div id="left" className="w-[30%] h-[100%]">
            <UserPannel></UserPannel>
          </div>
          <div
            id="right"
            className="w-[75%] bg-green-100 rounded-tl-2xl ml-[3px]"
          >
            {/* <BlankChatPage></BlankChatPage>
                    <IdChat></IdChat> */}
          </div>
        </div>
      </div>
      {/* <input className="p-3 bg-amber-400" onChange={changeHandler} type="file"   /> */}

      {/* <img src="F_text_transparent.png" alt="" />
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300" onClick={logoutHandler}>Logout</button> */}
    </>
  );
}
export default Home;
