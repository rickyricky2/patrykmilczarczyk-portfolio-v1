import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroComponent() {

    const { t } = useTranslation();

    return(
        <section id={"hero"} className={"w-full my-20"}>
            <section className={"flex flex-col gap-10"}>
                <h1 className={"text-light-text-header dark:text-dark-text-header text-6xl tiny:text-7xl sm:text-8xl tracking-tight font-medium"}>{t("hero.name")}</h1>
                <div className={"flex gap-10"}>
                    <a href={t("hero.cv.href")} download className={"relative overflow-hidden group transition px-4 py-2 cursor-pointer bg-light-text hover:bg-light-main hover:text-light-main-text text-light-bg dark:bg-dark-text dark:text-dark-bg dark:hover:bg-dark-main dark:hover:text-dark-main-text rounded-4xl font-semibold hover:scale-105 hover:rotate-1"}>
                        <span>{t("hero.cv.heading")}</span>
                        {/*<span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/100 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700"></span>*/}
                    </a>
                    <a href={t("hero.resume.href")} className={"relative overflow-hidden group transition px-4 py-2 cursor-pointer bg-light-text hover:bg-light-main hover:text-light-main-text text-light-bg dark:bg-dark-text dark:text-dark-bg dark:hover:bg-dark-main dark:hover:text-dark-main-text rounded-4xl font-semibold hover:scale-105 hover:rotate-1"}>
                        <span>{t("hero.resume.heading")}</span>
                        {/*<span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/100 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700"></span>*/}
                    </a>
                </div>
                <div className={"flex gap-5"}>
                    <a href={"https://github.com/rickyricky2"} className={"transition  hover:-translate-y-1"}>
                        <FaGithub className={"transition text-light-text dark:text-dark-text hover:text-light-main hover:scale-105 hover:rotate-2"} size={40}/>
                    </a>
                    <a href={"#"} className={"transition hover:-translate-y-1"}>
                        <FaLinkedin className={"transition text-light-text dark:text-dark-text hover:text-light-main hover:scale-105 hover:rotate-2"} size={40} />
                    </a>
                </div>
            </section>
        </section>
    );
}