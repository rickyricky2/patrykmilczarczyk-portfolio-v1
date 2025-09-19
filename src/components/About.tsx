import { useTranslation } from "react-i18next";
import React from "react";
import {useInView} from "../hooks/useInView.ts";

export default function About(){
    const { t } = useTranslation();
    const {ref,inView} = useInView();

    return(
        <section id={"about"} ref={ref} className={"w-full pt-20"}>
            <div className={"flex flex-col w-fit gap-2"}>
                <h2 className={"text-4xl tiny:text-5xl font-bold scale-y-110  text-light-text-header dark:text-dark-text-header"}>
                    {t("about.heading")}
                </h2>
                <span className={`transition-all h-[4px] ${inView ? "bg-light-main dark:bg-dark-main w-1/2 " : "bg-light-text dark:bg-dark-text w-1/3"}`}></span>
            </div>
            <p className={"my-10 tracking-tight lg:w-[80%] text-xl"}>
                {t("about.description").split("\n").map( (line,i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br/>
                        <br/>
                    </React.Fragment>
                ))}
            </p>
        </section>
    );
}