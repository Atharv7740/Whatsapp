import { HiStatusOnline } from "react-icons/hi";
import { MdAddIcCall } from "react-icons/md";
import { RiChatNewLine } from "react-icons/ri";

function UserPannelHeader(props){
    function setProfileHandler(){
        props.setShowProfile(true);

    }
    
    return(
        <>
        <div className="w-full h-[10%] rounded-t-2xl  rounded-tr-none flex justify-between items-center border-b-2">

            <button onClick={setProfileHandler} className="w-[40px] h-[40px] bg-black rounded-full ml-[10px] hover:scale-90"> 
                <img className="w-full h-full cover" src="https://github.com/Atharv7740/Assets/blob/main/11539820.png?raw=true" alt="" />
            </button>
            <div className="flex justify-center items-center gap-[10px] mr-[10px]">
            <RiChatNewLine className="w-[25px] h-[25px] hover:scale-90"/>
            <HiStatusOnline className="w-[25px] h-[25px] hover:scale-90"></HiStatusOnline>
            <MdAddIcCall className="w-[25px] h-[25px] hover:scale-90"/>
            </div>
            
            
        </div>
        </>
        
    )


}
export default UserPannelHeader;