import {useEffect, useState, useRef} from "react";

import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export default function ThemeSwitchButton(){
    const [theme, setTheme] = useState<string>("");
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if(!savedTheme){
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            return;
        }

        setTheme(savedTheme);
    },[]);

    const handleThemeChange = () =>{
        if(ref.current){
            ref.current.classList.add("changeTheme");

            ref.current.addEventListener("animationend",
                () => ref.current!.classList.remove("changeTheme"));
        }
        setTimeout(() => {
            let newTheme = theme === "dark" ? "light" : "dark"
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);

            document.documentElement.classList.remove("dark", "light");
            document.documentElement.classList.add(newTheme);
        },200);
    }

    return(
        <div className={"w-[35px] h-[35px] bg-transparent rounded-full flex justify-center items-center shake transition hover:text-light-main dark:hover:text-dark-main "} onClick={handleThemeChange}>
            <div className={``} ref={ref}>
                {theme == "light" ? <MdOutlineWbSunny size={25}/> : <FaRegMoon size={25}/>}
            </div>
        </div>
    );
}