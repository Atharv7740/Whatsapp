import { useDarkTheme } from "./ThemeContext"

function Footer(){
    const {isDark}=useDarkTheme();
    return <div className={`bg-black text-white p-[30px] w-[100%] h-[100px] ${isDark?"dark":"light"}`}>This is footer</div>
}
export default Footer;