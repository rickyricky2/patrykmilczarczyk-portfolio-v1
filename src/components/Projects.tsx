import {useTranslation} from "react-i18next";
import {useInView} from "../hooks/useInView.ts";
import { FaGithub } from "react-icons/fa";

export default function Projects(){
    const {ref,inView} = useInView();
    const { t } = useTranslation();

    return(
        <section id={"projects"} ref={ref} className={"w-full pt-20"}>
            <div className={"flex flex-col w-fit gap-2"}>
                <h2 className={"text-4xl tiny:text-5xl sm:text-6xl font-bold scale-y-115  text-light-text-header dark:text-dark-text-header"}>
                    {t("projects.heading")}
                </h2>
                <span className={`transition-all h-[4px] ${inView ? "bg-light-main dark:bg-dark-main w-1/2 " : "bg-light-text dark:bg-dark-text w-1/3"}`}></span>
            </div>
            <div className={"my-10 w-full lg:w-[80%] tracking-tight flex flex-col gap-10 sm:gap-5"}>
                {Object.entries(t("projects.main",{returnObjects:true})).map(([key, value]) => (
                    <a key={key} href={value.url} target={"_blank"}>
                        <section key={key} className={"flex flex-col max-sm:gap-10 sm:flex-row justify-between py-10 hover:bg-black/10 hover:shadow-md dark:hover:bg-white/6 px-5 -mx-5 backdrop-blur-xl rounded-md transition"}>
                            <img src={value.imageUrl} alt={value.alt}  width="300px"  className={"border-2 dark:border-white/15 h-full"} />
                            <article className={"w-full lg:w-1/2 flex flex-col gap-2 sm:px-5"}>
                                <h2 className={"text-light-text-header dark:text-dark-text-header font-semibold text-xl"}>
                                    <a href={value.url} target={"_blank"}>{value.heading}</a>
                                </h2>
                                <span className={"text-light-text dark:text-dark-text text-lg"}>{value.description}</span>
                                <div className={"flex flex-wrap gap-x-10 gap-y-2 mt-5"}>
                                    {value.technologies.split("\n").map( (name:string) => (
                                        <div key={name} className={"px-2 py-1 -mx-2 text-sm text-center sm:text-left text-light-main-text bg-light-main dark:bg-dark-main dark:text-dark-main-text w-fit rounded-4xl "}
                                             >
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            </article>
                            <a href={value.githubUrl} target="_blank">
                                <FaGithub />
                            </a>
                        </section>
                    </a>
                ))}
            </div>
        </section>
    );
}