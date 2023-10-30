import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";
import Fade from "../animations/fade";
import { useThemeSwitcher } from "@/lib/helper";
import Image from "next/image";

export default function Brands() {
    const { t } = useTranslation("lacolina");
    const brands = [
        "dimex",
        "hyundai",
        "nicol",
        "bulldoors",
        "iek",
        "eegger",
        "aquatherm",
    ];

    const { theme } = useThemeSwitcher();

    return (
        <div className="my-col-5 md:gap-y-10">
            <TitleAnimation text={t(`brands.title`).toUpperCase()} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 place-items-center gap-5">
                {brands.map((brand, index) => {
                    return (
                        <Fade
                            className={`rounded-[20px] relative w-full aspect-[1.19] h-auto group bg-gradient ${
                                theme === "dark"
                                    ? "reverse-border-blue"
                                    : "reverse-border"
                            }`}
                            delay={index * 0.1}
                            direction="right"
                            key={brand}
                        >
                            <Image
                                src={`/images/lacolina/brands/${brand}.png`}
                                alt={`${brand}-image`}
                                width={200}
                                height={0}
                                className="absolute center w-2/3 h-auto block group-hover:hidden"
                            />
                            <div className="hidden group-hover:block absolute center text-[10px] md:text-xs font-mont w-full px-2 font-bold text-center">
                                {t(`brands.${brand}`)}
                            </div>
                        </Fade>
                    );
                })}
            </div>
        </div>
    );
}
