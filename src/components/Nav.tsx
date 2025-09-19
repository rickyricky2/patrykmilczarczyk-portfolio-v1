import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch.tsx";
import ThemeSwitchButton from "./ThemeSwitchButton.tsx";

export default function Nav(){
    const { t } = useTranslation();

    return(
        <nav className={`w-full max-lg:hidden transition-all h-full sticky top-0 bg-light-bg/85 backdrop-blur-sm z-[999] 
                    py-25 dark:bg-transparent overflow-hidden`}>
            <div className={"flex flex-col gap-20 h-full"}>
                <div className={"flex justify-end items-center gap-10 h-full"}>
                    <LanguageSwitch/>
                    <ThemeSwitchButton/>
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
    );
}