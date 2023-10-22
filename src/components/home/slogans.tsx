import { useTranslation } from "next-i18next";
import Fade from "../animations/fade";
import { useThemeSwitcher } from "@/lib/helper";
import Image from "next/image";

export default function Slogans() {
    const { t } = useTranslation("home");
    const { theme } = useThemeSwitcher();
    return (
        <div className="pt-20 main-width md:grid lg:grid-cols-3 grid-cols-2 my-col-10 gap-x-5">
            <Fade
                direction="right"
                className={`flex flex-col w-full card-bg my-col-5 md:gap-y-10 items-center p-10 ${
                    theme === "light" ? "gradient-border" : "border-blue border"
                } `}
            >
                <div className="flex flex-col gap-y-1.5 items-center">
                    <Image
                        src={`/images/${theme}/1.svg`}
                        alt="logo-1"
                        width={130}
                        height={140}
                    />
                    <div className="text-big font-bold">
                        {t("slogans.1.title")}
                    </div>
                </div>

                <div className="text-justify text-sm">
                    {t("slogans.1.text")}
                </div>
            </Fade>
            <Fade
                delay={0.1}
                direction="right"
                className={`flex flex-col w-full card-bg my-col-5 md:gap-y-10 items-center p-10 ${
                    theme === "light" ? "gradient-border" : "border-blue border"
                } `}
            >
                <div className="flex flex-col gap-y-1.5 items-center">
                    <Image
                        src={`/images/${theme}/2.svg`}
                        alt="logo-2"
                        width={130}
                        height={140}
                    />
                    <div className="text-big font-bold">
                        {t("slogans.2.title")}
                    </div>
                </div>

                <div className="text-justify text-sm">
                    {t("slogans.2.text")}
                </div>
            </Fade>
            <Fade
                delay={0.2}
                direction="right"
                className={`flex flex-col w-full card-bg my-col-5 md:gap-y-10 items-center p-10 ${
                    theme === "light" ? "gradient-border" : "border-blue border"
                } `}
            >
                <div className="flex flex-col gap-y-1.5 items-center">
                    <Image
                        src={`/images/${theme}/3.svg`}
                        alt="logo-3"
                        width={130}
                        height={140}
                    />
                    <div className="text-big font-bold">
                        {t("slogans.3.title")}
                    </div>
                </div>

                <div className="text-justify text-sm">
                    {t("slogans.3.text")}
                </div>
            </Fade>
        </div>
    );
}
