import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch.tsx";
import ThemeSwitchButton from "./ThemeSwitchButton.tsx";
import {useState, useEffect, useRef} from "react";

export default function NavMobile(){
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const themeRef = useRef<HTMLDivElement | null>(null);
    const languageRef = useRef<HTMLDivElement | null>(null);
    const { t } = useTranslation();

    useEffect(()=>{
        if(!isOpen) return;

        const handleClick = (e:Event) => {
            const target = e.target as Node;

            const clickedAllowed =
                (buttonRef.current && target && buttonRef.current.contains(target)) ||
                (themeRef.current && target && themeRef.current.contains(target)) ||
                (languageRef.current && target && languageRef.current.contains(target));

            if (!clickedAllowed) {
                setIsOpen(false);
            }
        };

        document.addEventListener('pointerdown', handleClick);
        document.addEventListener('touchstart', handleClick);
        return () => {
            document.removeEventListener('pointerdown', handleClick);
            document.removeEventListener('touchstart', handleClick);
        }
    },[isOpen]);

    return(
        <>
        <div ref={buttonRef} className={"w-[40px] h-[40px] lg:hidden z-[9999] fixed top-5 right-5 rounded-lg flex flex-col gap-1 items-center justify-center"}
            onClick={() => setIsOpen(!isOpen)}>
            <span className={`bg-light-text dark:bg-dark-text hover:bg-light-main dark:hover:bg-dark-main w-[28px] h-[3px] transition rounded-full ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}/>
            <span className={`bg-light-text dark:bg-dark-text hover:bg-light-main dark:hover:bg-dark-main w-[28px] h-[3px] transition rounded-full ${isOpen ? "rotate-45 -translate-y-[1px]" : ""}`}/>
            <span className={`bg-light-text dark:bg-dark-text hover:bg-light-main dark:hover:bg-dark-main w-[28px] h-[3px] transition rounded-full ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}/>
        </div>
        <nav className={`w-full transition-all h-full lg:hidden fixed top-0 bg-light-bg/85 backdrop-blur-sm z-[999] 
                    py-20 dark:bg-transparent overflow-hidden ${isOpen ? "right-5" : "-right-100 opacity-0"}`}>
            <div className={"flex flex-col gap-20 h-full"}>
                <div className={"flex justify-end items-center gap-10 h-full"}>
                    <div ref={languageRef}>
                        <LanguageSwitch/>
                    </div>
                    <div ref={themeRef}>
                        <ThemeSwitchButton/>
                    </div>
                </div>
                <ul className={"flex flex-col gap-20 text-2xl font-semibold items-end uppercase"}>
                    <li className={"flex flex-col group"}>
                        <a href={"#about"}>{t("header.menu.about")}</a>
                        <span className={"min-w-0 max-w-0 h-[3px] rounded-lg bg-light-main dark:bg-dark-main group-hover:min-w-full transition-all z-[100]"}/>
                    </li>
                    <li className={"flex flex-col group"}>
                        <a href={"#technologies"}>{t("header.menu.technologies")}</a>
                        <span className={"min-w-0 max-w-0 h-[3px] rounded-lg bg-light-main dark:bg-dark-main group-hover:min-w-full transition-all z-[100]"}/>
                    </li>
                    <li className={"flex flex-col group"}>
                        <a href={"#skills"}>{t("header.menu.skills")}</a>
                        <span className={"min-w-0 max-w-0 h-[3px] rounded-lg bg-light-main dark:bg-dark-main group-hover:min-w-full transition-all z-[100]"}/>
                    </li>
                    <li className={"flex flex-col group"}>
                        <a href={"#certificates"}>{t("header.menu.certificates")}</a>
                        <span className={"min-w-0 max-w-0 h-[3px] rounded-lg bg-light-main dark:bg-dark-main group-hover:min-w-full transition-all z-[100]"}/>
                    </li>
                    <li className={"flex flex-col group"}>
                        <a href={"#education"}>{t("header.menu.education")}</a>
                        <span className={"min-w-0 max-w-0 h-[3px] rounded-lg bg-light-main dark:bg-dark-main group-hover:min-w-full transition-all z-[100]"}/>
                    </li>
                    <li className={"flex flex-col group"}>
                        <a href={"#experience"}>{t("header.menu.experience")}</a>
                        <span className={"min-w-0 max-w-0 h-[3px] rounded-lg bg-light-main dark:bg-dark-main group-hover:min-w-full transition-all z-[100]"}/>
                    </li>
                    <li className={"flex flex-col group"}>
                        <a href={"#projects"}>{t("header.menu.projects")}</a>
                        <span className={"min-w-0 max-w-0 h-[3px] rounded-lg bg-light-main dark:bg-dark-main group-hover:min-w-full transition-all z-[100]"}/>
                    </li>
                </ul>
            </div>
        </nav>
            </>
    );
}