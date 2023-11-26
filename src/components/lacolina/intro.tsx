import Image from "next/image";
import TitleAnimation from "../animations/title";
import parse from "html-react-parser";
import { useTranslation } from "next-i18next";
import { useThemeSwitcher } from "@/lib/helper";
import Fade from "../animations/fade";

export default function ColinaIntro() {
    const { t } = useTranslation("lacolina");
    const { theme } = useThemeSwitcher();

    return (
        <div className="my-col-10 py-10 md:py-36">
            <TitleAnimation
                className="text-big font-extrabold"
                lacolina={true}
                text={t("intro.title").toUpperCase()}
            />
            <div className="relative w-full h-full">
                <div className="absolute hidden md:block left-0 top-[5%]  h-full w-1/6">
                    <Image
                        src={`/images/lacolina/grid.png`}
                        alt="colina-grid"
                        fill
                    />
                </div>
                <div className="absolute hidden md:block right-0 rotate-180 top-[5%]  h-full w-1/6">
                    <Image
                        src={`/images/lacolina/grid.png`}
                        alt="colina-grid"
                        fill
                    />
                </div>
                <div className="main-width my-col-10 justify-between md:flex-row items-center">
                    <div className="w-full md:w-1/2 max-w-[361px] mx-auto aspect-[1.81] relative">
                        <Image
                            src={`/images/logos/${theme}/colina.png`}
                            alt="colina-logo"
                            fill
                        />
                    </div>
                    <div className="w-full md:w-1/2 relative h-auto aspect-[1.77]">
                        <Image
                            src={`/images/lacolina/banners/0.png`}
                            alt="colina-banner"
                            fill
                        />
                    </div>
                </div>
            </div>

            <Fade
                direction={"right"}
                delay={0.1}
                className={`my-col-5 main-width md:flex-row justify-between items-stretch border-0 md:border-[5px] colina-border`}
            >
                <div className="relative h-auto aspect-[1.75] w-full">
                    <div className="relative w-3/4 h-full aspect-[1.89]">
                        <Image
                            src={"/images/lacolina/page-bg.png"}
                            alt="intro-bg"
                            className="object-cover"
                            fill
                        />
                    </div>
                    <Image
                        src={"/images/lacolina/intro.png"}
                        alt="intro-pic"
                        width={577}
                        height={0}
                        className="absolute right-0 bottom-0 w-3/4 h-3/4 object-cover md:-mb-[5px]"
                    />
                </div>
                <div className="w-full my-col-5 md:my-col-10 p-5 md:p-10 colina-border md:border-0">
                    <div className="text-justify">{parse(t("intro.text"))}</div>
                </div>
            </Fade>
        </div>
    );
}
