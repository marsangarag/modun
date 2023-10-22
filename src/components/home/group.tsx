import { useTranslation } from "next-i18next";
import Fade from "../animations/fade";

export default function Group() {
    const { t } = useTranslation("home");

    return (
        <Fade direction="left" className="my-col-10 main-width overflow-hidden">
            <div className="text-huge font-extrabold text-center md:text-start">
                {t("intro.title").toUpperCase()}
            </div>
            <div className="text-justify font-dm">{t("intro.text")}</div>
            <div className="my-col-5 items-center justify-between md:flex-row gap-x-5 md:pt-10 place-items-start">
                <div className="flex flex-col justify-start h-full text-center md:text-start">
                    <div className="text-blue font-black text-biggest ">
                        30+
                    </div>
                    <div>{t("intro.experience")}</div>
                </div>
                <div className="flex flex-col justify-start h-full text-center md:text-start">
                    <div className="text-blue font-black text-biggest ">
                        10+
                    </div>
                    <div>{t("intro.branch")}</div>
                </div>
                <div className="flex flex-col justify-start h-full text-center md:text-start">
                    <div className="text-blue font-black text-biggest ">
                        200+
                    </div>
                    <div>{t("intro.work")}</div>
                </div>
            </div>
        </Fade>
    );
}
