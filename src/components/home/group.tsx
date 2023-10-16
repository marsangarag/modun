import { useTranslation } from "next-i18next";
import Fade from "../animations/fade";

export default function Group() {
    const { t } = useTranslation("home");
    return (
        <div className="pt-20 flex flex-col gap-y-10 md:w-2/3 mx-auto px-10 ">
            <Fade
                direction="left"
                className="text-3xl font-semibold text-center md:text-start"
            >
                {t("intro.title")}
            </Fade>
            <div className="flex flex-col gap-y-2.5">
                <Fade delay={0.1} direction="left">
                    {t("intro.text.title")}
                </Fade>
                <Fade delay={0.15} direction="left">
                    1. {t("intro.text.1")}
                </Fade>
                <Fade delay={0.2} direction="left">
                    2. {t("intro.text.2")}
                </Fade>
                <Fade delay={0.25} direction="left">
                    3. {t("intro.text.3")}
                </Fade>
                <Fade delay={0.3} direction="left">
                    4. {t("intro.text.4")}
                </Fade>
                <Fade delay={0.35} direction="left">
                    5. {t("intro.text.5")}
                </Fade>
                <Fade delay={0.4} direction="left">
                    6. {t("intro.text.6")}
                </Fade>
                <Fade delay={0.45} direction="left">
                    7. {t("intro.text.7")}
                </Fade>
                <Fade direction="left" delay={0.5} className="text-justify">
                    {t("intro.text.end")}
                </Fade>
            </div>
        </div>
    );
}
