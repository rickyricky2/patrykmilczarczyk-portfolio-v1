import {useTranslation} from "react-i18next";

export default function Footer(){

    const { t } = useTranslation();

    return(
        <footer>
            <section className={"lg:w-[80%] text-lg"}>
                {t("footer.description")}
            </section>
        </footer>
    );
}