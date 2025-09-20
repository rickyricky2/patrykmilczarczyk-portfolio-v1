import { useTranslation } from "react-i18next";
import {useInView} from "../hooks/useInView.ts";

export default function Certificates() {
    const {ref,inView} = useInView({ rootMargin: "-20% 0px -20% 0px" });
    const {t} = useTranslation();

    return (
        <section id={"certificates"} ref={ref} className={"w-full pt-20"}>
            <div className={"flex flex-col w-fit gap-2"}>
                <h2 className={"text-4xl tiny:text-5xl sm:text-6xl font-bold scale-y-115  text-light-text-header dark:text-dark-text-header"}>
                    {t("certificates.heading")}
                </h2>
                <span className={`transition-all h-[4px] ${inView ? "bg-light-main dark:bg-dark-main w-1/2 " : "bg-light-text dark:bg-dark-text w-1/3"}`}></span>
            </div>
            <div className={"my-10 lg:w-[80%] tracking-tight flex flex-col gap-10 sm:gap-5"}>
                {Object.entries(t("certificates.main",{returnObjects:true})).map(([key, value]) => (
                    <section
                        key={key}
                        className={"flex flex-col sm:flex-row max-sm:gap-5 max-sm:items-center py-10 hover:bg-black/10 hover:shadow-sm dark:hover:bg-white/6 px-5 -mx-5 backdrop-blur-lg rounded-md transition-all"}>
                        <a href={value.downloadSrc} download><img src={value.src}
                             alt={"certicate image"}
                             width={320}
                             className={"flex justify-center h-full items-center transition border-2 dark:border-white/15 group-hover:text-dark-main"}/>
                        </a>
                        <article className={"sm:w-1/2 sm:px-5"}>
                            <h2 className={"text-light-text-header dark:text-dark-text-header font-semibold text-xl text-center sm:text-left"}>{value.heading}</h2>
                            <span>{value.description}</span>

                        </article>
                    </section>
                ))}
            </div>
        </section>
    );
}