import Image from "next/image";
import Fade from "../animations/fade";
import { useTranslation } from "next-i18next";
import { useThemeSwitcher } from "@/lib/helper";

export default function Ceo() {
    const { t } = useTranslation("home");
    const { theme } = useThemeSwitcher();
    return (
        <div className={`py-10 relative h-full w-full`}>
            <div className="absolute top-0 right-0 h-full hidden xl:block w-auto aspect-[0.43] -z-10">
                <Image src={`/icons/${theme}/grid.svg`} alt="grid" fill />
            </div>
            <div className="main-width flex flex-col gap-y-5 md:gap-y-10 relative">
                <div className="xl:grid grid-cols-7 flex flex-col gap-10 justify-between w-full h-full">
                    <div className="flex flex-col gap-y-5 md:gap-y-10 col-span-4">
                        <div className="flex flex-col gap-y-2.5 md:gap-y-5">
                            <div className="text-blue font-bold">
                                {t("ceo.subtitle")}
                            </div>
                            <div className="font-extrabold text-bigger">
                                {t("ceo.title")}
                            </div>
                        </div>
                        <div className="text-justify text-sm">
                            {t("ceo.text")}
                        </div>
                    </div>
                    <div className="relative rounded-xl h-full w-full aspect-[0.72] overflow-hidden col-span-3">
                        <Image src={"/images/ceo.jpg"} alt="ceo" fill />
                        <div className="absolute bottom-10 right-10">
                            <div className="text-big">
                                {t("ceo.name").toUpperCase()}
                            </div>
                            <div className="text-[10px]">
                                {t("ceo.position").toUpperCase()}
                            </div>
                        </div>
                    </div>
                    <div className="self-center mx-auto col-span-7">
                        <Image
                            src={`/images/${theme}/signature.png`}
                            alt="grid"
                            width={494}
                            height={154}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
