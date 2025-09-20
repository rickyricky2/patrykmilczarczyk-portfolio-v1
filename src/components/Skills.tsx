import { useTranslation } from "react-i18next";
import {useInView} from "../hooks/useInView.ts";
import type {ReactNode} from "react";

// icons
import { FaReact, FaDatabase, FaPython, FaServer, FaCodeBranch, FaCar, FaPhotoVideo } from "react-icons/fa";

const icons:Record<string,ReactNode> = {
    FaReact: <FaReact size={60}/>,
    FaDatabase: <FaDatabase size={60}/>,
    FaPython: <FaPython size={60}/>,
    FaServer: <FaServer size={60}/>,
    FaCodeBranch: <FaCodeBranch size={60}/>,
    FaCar: <FaCar size={60}/>,
    FaPhotoVideo: <FaPhotoVideo size={60}/>,
}

export default function Skills() {
    const {ref,inView} = useInView({ rootMargin: "-20% 0px -20% 0px" });
    const {t} = useTranslation();

    return (
        <section id={"skills"} ref={ref} className={"w-full pt-20"}>
            <div className={"flex flex-col w-fit gap-2"}>
                <h2 className={"text-4xl tiny:text-5xl sm:text-6xl font-bold scale-y-115  text-light-text-header dark:text-dark-text-header"}>
                    {t("skills.heading")}
                </h2>
                <span className={`transition-all h-[4px] ${inView ? "bg-light-main dark:bg-dark-main w-1/2 " : "bg-light-text dark:bg-dark-text w-1/3"}`}></span>
            </div>
            <div className={"my-20 tracking-tight flex flex-col gap-20 sm:gap-5"}>
                {Object.entries(t("skills.main",{returnObjects:true})).map(([key, value]: [string,{heading:string, icon:string}]) => (
                    <section
                        key={key}
                        className={"flex lg:w-[80%] flex-col sm:flex-row max-sm:gap-5 group py-5 sm:py-10 hover:bg-black/10 hover:shadow-sm dark:hover:bg-white/6 px-5 -mx-5 backdrop-blur-lg rounded-md transition-all"}>
                        <div className={"flex justify-center items-center px-20 transition animate-float text-light-main dark:text-dark-main"}
                             style={{
                                 animationDelay: `${Math.random() * 3}s`,
                                 animationDuration: `${3 + Math.random() * 10}s`
                             }}>
                            {icons[value.icon]}
                        </div>
                        <article className={"lg:w-1/2"}>
                            <h2 className={"text-light-text-header dark:text-dark-text-header font-semibold text-xl text-center sm:text-left"}>{value.heading}</h2>
                        </article>
                    </section>
                ))}
            </div>
        </section>
    );
}