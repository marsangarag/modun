import Image from "next/image";
import Fade from "../animations/fade";
import { useThemeSwitcher } from "@/lib/helper";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

export default function SloganCard({ index }: { index: number }) {
    const { theme } = useThemeSwitcher();
    const { t } = useTranslation("home");

    return (
        <Fade
            delay={index * 0.1}
            direction="right"
            className={`slogan-card group bg-gradient ${
                theme === "dark"
                    ? "hover:border-blue hover:border "
                    : "hover:gradient-border "
            } `}
        >
            <div className="flex flex-col text-white gap-y-1.5 items-center group-hover:opacity-0 opacity-100 absolute center w-full">
                <Image
                    src={`/images/dark/${index + 1}.svg`}
                    alt="logo-1"
                    width={130}
                    height={140}
                />
                <div className="text-big font-bold">
                    {t(`slogans.${index + 1}.title`)}
                </div>
            </div>
            <div className="lg:text-justify text-center text-sm w-3/4 opacity-0 group-hover:opacity-100 absolute center">
                {t(`slogans.${index + 1}.text`)}
            </div>
        </Fade>
    );
}
