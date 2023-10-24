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
                    <div className="xl:grid grid-cols-7 flex flex-col gap-10 justify-between w-full h-full">
                        <div className="my-col-5 md:gap-y-10 col-span-4">
                            <Fade
                                direction="up"
                                delay={0.1}
                                className="font-extrabold text-bigger"
                            >
                                {t("ceo.title").toUpperCase()}
                            </Fade>
                            <Fade
                                delay={0.2}
                                direction="left"
                                className="text-justify text-sm"
                            >
                                {t("ceo.text")}
                            </Fade>
                            <Fade direction="right">
                                <Image
                                    className="mx-auto"
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
                            className="relative rounded-xl h-full w-full aspect-[0.72] overflow-hidden col-span-3"
                        >
                            <Image src={"/images/ceo.jpg"} alt="ceo" fill />
                            <div className="absolute font-mont text-white bottom-10 right-10">
                                <div className="text-big">
                                    {t("ceo.name").toUpperCase()}
                                </div>
                                <div className="text-[10px]">
                                    {t("ceo.position").toUpperCase()}
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
}
