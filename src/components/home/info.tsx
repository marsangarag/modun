import { useTranslation } from "next-i18next";
import Fade from "../animations/fade";

export default function GroupInfo() {
    const { t } = useTranslation("home");
    return (
        <>
            <div className="my-col-5 main-width font-mont items-center justify-between sm:flex-row gap-x-5 md:pt-10 place-items-start">
                <Fade
                    direction="right"
                    className="flex flex-col justify-start h-full text-center md:text-start"
                >
                    <div className="text-blue font-black text-biggest ">
                        30+
                    </div>
                    <div>{t("intro.experience")}</div>
                </Fade>
                <Fade
                    direction="right"
                    delay={0.1}
                    className="flex flex-col justify-start h-full text-center md:text-start"
                >
                    <div className="text-blue font-black text-biggest ">
                        10+
                    </div>
                    <div>{t("intro.branch")}</div>
                </Fade>
                <Fade
                    direction="right"
                    delay={0.2}
                    className="flex flex-col justify-start h-full text-center md:text-start"
                >
                    <div className="text-blue font-black text-biggest ">
                        200+
                    </div>
                    <div>{t("intro.work")}</div>
                </Fade>
            </div>
        </>
    );
}
