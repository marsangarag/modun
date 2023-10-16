import { useTranslation } from "next-i18next";
import Fade from "../animations/fade";

export default function Slogans() {
    const { t } = useTranslation("home");
    return (
        <div className="px-10 pt-20 md:grid grid-cols-3 flex flex-col gap-y-10 gap-x-5">
            <Fade
                direction="right"
                className="text-center flex flex-col gap-5 md:gap-y-10 items-center"
            >
                <div className="text-3xl font-semibold">
                    {t("slogans.1.title")}
                </div>

                <div className="uppercase"> {t("slogans.1.text")}</div>
            </Fade>
            <Fade
                delay={0.2}
                direction="right"
                className="text-center flex flex-col gap-5 md:gap-y-10 items-center"
            >
                <div className="text-3xl font-semibold">
                    {t("slogans.2.title")}
                </div>

                <div className="uppercase"> {t("slogans.2.text")}</div>
            </Fade>
            <Fade
                delay={0.3}
                direction="right"
                className="text-center flex flex-col gap-5 md:gap-y-10 items-center"
            >
                <div className="text-3xl font-semibold">
                    {t("slogans.3.title")}
                </div>

                <div className="uppercase"> {t("slogans.3.text")}</div>
            </Fade>
        </div>
    );
}
