import Image from "next/image";
import TitleAnimation from "../animations/title";
import parse from "html-react-parser";
import { useTranslation } from "next-i18next";
import { useThemeSwitcher } from "@/lib/helper";
import Fade from "../animations/fade";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function ColinaIntro() {
    const { t } = useTranslation("lacolina");
    const { theme } = useThemeSwitcher();

    return (
        <div className="my-col-10 py-10">
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
                    <div className="w-full md:w-1/2 max-w-[250px] mx-auto aspect-[1.81] relative">
                        <Image
                            src={`/images/logos/${theme}/4.png`}
                            alt="colina-logo"
                            fill
                        />
                    </div>
                    <div className="w-full md:w-1/2 relative h-full cursor-grab">
                        <Slide
                            cssClass="relative"
                            duration={5000}
                            transitionDuration={500}
                            easing="ease"
                            arrows={false}
                            indicators
                        >
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-full h-auto aspect-[1.55]"
                                    style={{
                                        backgroundImage: `url(/images/lacolina/banners/${index}.png)`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundAttachment: "fixed",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                ></div>
                            ))}
                        </Slide>
                    </div>
                </div>
            </div>
            <TitleAnimation
                className="text-big font-extrabold"
                lacolina={true}
                text={t("intro.title").toUpperCase()}
            />

            <Fade
                direction={"right"}
                delay={0.1}
                className={`my-col-5 main-width md:flex-row justify-between items-center lg:items-stretch border-0 md:border-[5px] colina-border`}
            >
                <div className="h-auto md:-my-5 md:-ml-[7%] relative aspect-[1.73] w-full md:w-[110%]">
                    <Image
                        src={"/images/lacolina/ceo.png"}
                        alt="intro-bg"
                        fill
                    />
                </div>
                {/* <div className="relative h-auto aspect-[1.75] w-full">
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
                </div> */}
                <div className="w-full my-col-5 md:my-col-10 p-5 md:p-10 colina-border md:border-0">
                    <div className="text-justify text-sm">
                        {parse(t("intro.text"))}
                    </div>
                </div>
            </Fade>
        </div>
    );
}
