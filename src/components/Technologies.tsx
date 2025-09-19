import {useTranslation} from "react-i18next";
import {useInView} from "../hooks/useInView.ts";

export default function Technologies(){
    const {ref,inView} = useInView();
    const { t } = useTranslation();

    return(
        <section id={"technologies"} ref={ref} className={"w-full pt-20"}>
            <div className={"flex flex-col w-fit gap-2"}>
                <h2 className={"text-4xl tiny:text-5xl sm:text-6xl font-bold scale-y-110  text-light-text-header dark:text-dark-text-header"}>
                    {t("technologies.heading")}
                </h2>
                <span className={`transition-all h-[4px] ${inView ? "bg-light-main dark:bg-dark-main w-1/2 " : "bg-light-text dark:bg-dark-text w-1/3"}`}></span>
            </div>
            <div className={"my-10 lg:w-[80%] tracking-tight text-xl  gap-5 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] tiny:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]"}>
                {t("technologies.main").split("\n").map( (line,i) => (
                    <div key={i} className={"px-4 py-2 -mx-2 shadow-sm text-light-main-text bg-light-main dark:bg-dark-main dark:text-dark-main-text animate-float w-fit rounded-4xl"}
                         style={{
                             animationDelay: `${Math.random() * 3}s`,      // 0–3s
                             animationDuration: `${3 + Math.random() * 10}s` // 3–6s
                         }}>
                        {line}
                    </div>
                ))}
            </div>
        </section>
    );
}