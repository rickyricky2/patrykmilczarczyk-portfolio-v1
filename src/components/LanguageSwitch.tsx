import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import {useState, useLayoutEffect} from "react";
import { useClickOutside} from "../hooks/useClickOutside.ts";

const languages = [{
        name:"PL",
        value:"pl",
    },
    {
        name:"EN",
        value:"en",
    }
]

export default function LanguageSwitch(){
    const [pickedLanguage, setPickedLanguage] = useState("pl");
    const [isOpen, setIsOpen] = useState(false);

    useLayoutEffect(() => {
        const lng = localStorage.getItem("language") || navigator.language;
        if(lng.startsWith("pl")){
            setPickedLanguage("pl");
        }else{
            setPickedLanguage("en");
        }
    }, []);

    const ref  = useClickOutside( () => setIsOpen(false) );
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
    };


    return(
        <div onClick={() => setIsOpen(!isOpen)}
             ref={ref}
            className={`flex justify-center items-center group relative z-[999] transition border-none outline-none appearance-none font-semibold w-17 p-1 text-center  hover:bg-light-main hover:text-light-main-text dark:hover:bg-dark-main dark:hover:text-dark-main-text rounded-t-xl ${isOpen ? "bg-light-main text-light-main-text" : "rounded-b-xl bg-light-text text-light-bg dark:bg-dark-text dark:text-dark-bg"}`}>
            {pickedLanguage.toUpperCase()}
            <IoIosArrowDown size={30} className={`transition ${isOpen ? "rotate-x-180" : ""}`}/>
            <div className={`absolute z-0 overflow-hidden w-full h-fit rounded-b-xl bg-light-main text-light-main-text ${isOpen ? "opacity-100 top-9" : "opacity-0 -top-20"}`}>
                <ul>
                    {languages.map( language => (
                        <li className={"dark:hover:bg-dark-mainSub/90"}
                            onClick={ () => {
                                if(!isOpen)return;
                                changeLanguage(language.value);
                                setPickedLanguage(language.value);
                        }}>{language.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}