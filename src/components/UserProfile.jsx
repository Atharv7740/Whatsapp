import { IoMdArrowRoundBack } from "react-icons/io";

function UserProfile(props){
    function backHandler() {
    props.setShowProfile(false);
  }
    return(
        <>
            <IoMdArrowRoundBack onClick={backHandler} />
        <div className="flex flex-col gap-10">
            <img src="" alt="" />
            name

        </div>

        </>
    )

}
export default UserProfile;