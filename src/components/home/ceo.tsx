import Image from "next/image";
import Fade from "../animations/fade";
import { useTranslation } from "next-i18next";
import { useThemeSwitcher } from "@/lib/helper";

export default function Ceo() {
    const { t } = useTranslation("home");
    const { theme } = useThemeSwitcher();
    return (
        <>
            <div className={`pt-10 relative h-full w-full`}>
                <div className="absolute bottom-0 right-0 h-[110%] hidden xl:block w-1/4 -z-10">
                    <Image src={`/icons/${theme}/ceo.svg`} alt="grid" fill />
                </div>
                <div className="main-width  my-col-5 md:gap-y-10 relative">
                    <div className="flex flex-col gap-10 justify-between items-center w-full h-full lg:flex-row">
                        <div className="my-col-5 md:gap-y-10 lg:w-[57%] w-full items-center lg:items-end">
                            <Fade
                                direction="up"
                                delay={0.1}
                                className="font-extrabold text-bigger"
                            >
                                {t("ceo.title").toUpperCase()}
                            </Fade>
                            <div className="text-justify text-sm my-col-5 lg:gap-y-10">
                                <Fade delay={0.2} direction="left">
                                    {t("ceo.text.1")}
                                </Fade>
                                <Fade delay={0.3} direction="left">
                                    {t("ceo.text.2")}
                                </Fade>
                                <Fade delay={0.4} direction="left">
                                    {t("ceo.text.3")}
                                </Fade>
                            </div>
                            <Fade direction="right">
                                <Image
                                    src={`/images/${theme}/signature.png`}
                                    alt="grid"
                                    width={494}
                                    height={154}
                                />
                            </Fade>
                        </div>
                        <Fade
                            direction="right"
                            delay={0.3}
                            className="relative rounded-xl h-auto w-full lg:w-[43%] aspect-[0.72] overflow-hidden"
                        >
                            <Image src={"/images/ceo.png"} alt="ceo" fill />
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
}
