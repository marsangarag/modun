import Image from "next/image";
import Fade from "../animations/fade";
import { useThemeSwitcher } from "@/lib/helper";
import { useTranslation } from "next-i18next";

export default function SloganCard({ index }: { index: number }) {
    const { theme } = useThemeSwitcher();
    const { t } = useTranslation("home");

    return (
        <Fade
            delay={index * 0.1}
            direction="right"
            className={`slogan-card rounded-3xl group text-center hover:bg-gradient-to-b from-blue to-red dark:to-black ${
                theme === "dark"
                    ? "blue-border"
                    : "gradient-border hover:no-border"
            } `}
        >
            <div className="flex flex-col gap-y-1.5 items-center group-hover:opacity-0 transition-all duration-300 opacity-100 absolute center w-full">
                <Image
                    src={`/images/${theme}/${index + 1}.svg`}
                    alt="logo-1"
                    width={80}
                    height={100}
                />
                <div className="text-big font-bold">
                    {t(`slogans.${index + 1}.title`)}
                </div>
            </div>
            <div className="text-center text-white text-sm w-3/4 opacity-0 transition-all duration-300 group-hover:opacity-100 absolute center">
                {t(`slogans.${index + 1}.text`)}
            </div>
        </Fade>
    );
}
