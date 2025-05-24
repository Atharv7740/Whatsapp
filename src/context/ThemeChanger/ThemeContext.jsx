//  Context Creation- points to remember(PTR)
//1 - import-createContext , useContext
//2-  create context -> create a function that provide that context component  ( using contextName.provider) -> then to use that context in any component  use "usecontext(contextName) and now you can extract all the props the are passed form the ContextWrapper fucntion

import {createContext, useContext, useState } from "react";

const ThemeContext = createContext();



export function useDarkTheme(){
    
    return useContext(ThemeContext);

}

function ThemeWrapper({children}){
    const [isDark, updateDark]=useState(false);
    function handleToggleButton(){
        updateDark(!isDark);

    }
    return <ThemeContext.Provider value={{isDark,handleToggleButton}}>
        {children}
    </ThemeContext.Provider>


}
export default ThemeWrapper;