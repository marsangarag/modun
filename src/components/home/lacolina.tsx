import { useTranslation } from "next-i18next";
import Image from "next/image";
import Fade from "../animations/fade";
import { useRouter } from "next/router";
import TitleAnimation from "../animations/title";

export default function LacolinaComponent() {
    const { t } = useTranslation("home");
    const router = useRouter();

    return (
        <>
            <TitleAnimation text={t("lacolina.caption")} />
            <div className="relative w-full h-full">
                <div className="hidden md:block absolute bottom-0 w-[36.12%] h-auto aspect-[1.1] left-0">
                    <Image
                        src={"/images/lacolina/background.png"}
                        alt="lacolina-apartments"
                        fill
                    />
                </div>
                <div className="my-col-5 md:grid grid-cols-3 main-width">
                    <Fade
                        direction="up"
                        className="my-col-5 md:my-col-10 md:w-5/6"
                    >
                        <div className="text-huge font-extrabold">
                            {t("lacolina.title").toUpperCase()}
                        </div>
                        <div className="text-[18px] md:text-[10px] lg:text-[14px] xl:text-sm font-mont text-justify relative">
                            <div className="absolute hidden md:block -left-5 top-2 bg-blue w-0.5 h-[calc(100%-12px)]"></div>

                            {t("lacolina.subtitle")}
                        </div>
                    </Fade>
                    <div className="col-span-2 grid grid-cols-2 gap-5 lg:gap-10">
                        {Array.from({ length: 4 }).map(
                            (item, index: number) => {
                                return (
                                    <Fade
                                        direction="right"
                                        delay={index * 0.1}
                                        key={index}
                                        className="relative h-auto aspect-[0.91] w-auto"
                                    >
                                        <Image
                                            src={`/images/lacolina/${index}.png`}
                                            alt={`lacolina-image-${index}`}
                                            fill
                                        />
                                        {index === 0 ? (
                                            <>
                                                <div className="absolute inset-0 w-full h-full bg-black/50"></div>
                                                <div className="absolute z-10 center flex text-white flex-col gap-y-2.5 text-center">
                                                    <div className="text-big text-white font-bold">
                                                        {t(
                                                            "lacolina.main"
                                                        ).toUpperCase()}
                                                    </div>
                                                    <div
                                                        onClick={() =>
                                                            router.push(
                                                                "/la-colina"
                                                            )
                                                        }
                                                        className="bg-blue/75 font-mont cursor-pointer rounded-full py-2.5 px-5 cursor pointer text-[15px]"
                                                    >
                                                        {t("lacolina.seemore")}
                                                    </div>
                                                </div>
                                            </>
                                        ) : null}
                                    </Fade>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
