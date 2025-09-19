import { useTranslation } from "react-i18next";
import {useInView} from "../hooks/useInView.ts";

export default function Experience(){
    const {ref,inView} = useInView();
    const { t } = useTranslation();

    return(
        <section id={"experience"} ref={ref} className={"w-full pt-20"}>
            <div className={"flex flex-col w-fit gap-2"}>
                <h2 className={"text-4xl tiny:text-5xl sm:text-6xl font-bold scale-y-115  text-light-text-header dark:text-dark-text-header"}>
                    {t("experience.heading")}
                </h2>
                <span className={`transition-all h-[4px] ${inView ? "bg-light-main dark:bg-dark-main w-1/2 " : "bg-light-text dark:bg-dark-text w-1/3"}`}></span>
            </div>
            <div className={"my-10 lg:w-[80%] tracking-tight flex flex-col gap-10 sm:gap-5"}>
                {Object.entries(t("experience.main",{returnObjects:true})).map(([key, value]) => (
                <section key={key} className={"flex justify-between flex-col-reverse sm:flex-row max-sm:items-center max-sm:gap-2 py-5 sm:py-10 hover:bg-black/10 hover:shadow-sm dark:hover:bg-white/6 px-5 -mx-5 backdrop-blur-xl rounded-md transition"}>
                    <span className={"text-lg"}>{value.date}</span>
                    <article className={"sm:w-1/2"}>
                        <h2 className={"text-light-text-header dark:text-dark-text-header font-semibold text-xl text-center sm:text-left"}>{value.heading}</h2>
                        <span>{value.description}</span>
                    </article>
                </section>
                ))}
            </div>
        </section>
    );
}