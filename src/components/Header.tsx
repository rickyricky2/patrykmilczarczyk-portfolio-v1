import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch.tsx";
import ThemeSwitchButton from "./ThemeSwitchButton.tsx";
import {useScroll} from "../hooks/ifScrolled.ts";

export default function Header(){
    const scrolled = useScroll();
    const { t } = useTranslation();

    return(
        <header className={`w-full transition-all h-15 sticky top-0 py-5 bg-light-bg/85 backdrop-blur-sm z-[999] 
                    ${scrolled ? " dark:bg-dark-bg/80" : "py-10 dark:bg-transparent"} overflow-hidden`}>
            <div className={"max-w-screen-2xl mx-auto h-full flex justify-between items-center"}>
                <ul className={"flex gap-20 text-2xl font-semibold items-center"}>
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
                <div className={"flex items-center gap-10 h-full"}>
                    <LanguageSwitch/>
                    <ThemeSwitchButton/>
                </div>
            </div>
        </header>
    );
}