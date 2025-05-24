import { Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Home from "./Home";
import { useDarkTheme } from "./ThemeContext";




function App(){
    const {handleToggleButton}=useDarkTheme();
    return(
        <>
        <button onClick={handleToggleButton} className="border-2 p-2.5 bg-blue-400 text-black ml-0 " >Toogle Theme</button>

        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>}/>

        </Routes>
        </>

    )
     


}
export default App;