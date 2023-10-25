import { useTranslation } from "next-i18next";
import Fade from "../animations/fade";
import Image from "next/image";

export default function Group() {
    const { t } = useTranslation("home");

    return (
        <Fade direction="left" className="my-col-10 main-width">
            <div className="text-huge font-extrabold text-center md:text-start">
                {t("intro.title").toUpperCase()}
            </div>
            <div className="my-col-5">
                <div className="text-blue text-big font-semibold">
                    {t("intro.caption")}
                </div>
                <div className="text-justify relative">
                    <div className="absolute hidden sm:block -left-5 top-2 bg-blue w-0.5 h-[calc(100%-12px)]"></div>
                    {t("intro.text")}
                </div>
            </div>
        </Fade>
    );
}
