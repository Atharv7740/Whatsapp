import { useParams } from "react-router-dom";
function Chat(){
    const params= useParams();
    return <div> Chat:{params.userId} </div>

}
export default Chat;