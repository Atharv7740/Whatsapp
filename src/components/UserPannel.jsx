import { useState } from "react";

import UserPannelHeader from "./UserPannelHeader";
// import { IoMdArrowRoundBack } from "react-icons/io";
import ChatList from "./ChatList";
import UserProfile from "./UserProfile";

function UserPannel(props) {
  const [showProfile, setShowProfile] = useState(false);
  

  if (showProfile) {
    return (
      <>
        <UserProfile setShowProfile={setShowProfile}/>
      </>
    );
  }
  return (
    <>
      <UserPannelHeader
        setShowProfile={setShowProfile}
        showProfile={showProfile}
      ></UserPannelHeader>
      <ChatList></ChatList>
    </>
  );
}
export default UserPannel;
