import { useEffect, useState } from "react";

function Loading(){
    const [loading , setLoading]=useState(true);
    const[user, setUser]=useState(null);
    


    function cb(){
        (async function fetchUser(){
            const response= await fetch('https://jsonplaceholder.typicode.com/users/1');
            const userData= await response.json();
            setLoading(false);
            setUser(userData);
        })();
    }
    useEffect(cb, []);
    if(loading){
        return <>
        Users
        Loading....
        </>
    }
    else{
        return<>
        <div>{user.id}</div>
        <div>{user.name}</div>
        </>
    }


}
export default Loading;