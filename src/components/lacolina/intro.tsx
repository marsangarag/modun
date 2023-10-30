import Image from "next/image";
import TitleAnimation from "../animations/title";
import parse from "html-react-parser";
import { useTranslation } from "next-i18next";

export default function ColinaIntro() {
    const { t } = useTranslation("lacolina");

    return (
        <>
            <TitleAnimation
                className="text-big font-extrabold"
                lacolina={true}
                text={t("intro.title").toUpperCase()}
            />
            <div className="relative my-col-10 md:grid grid-cols-2 gap-x-10 items-center">
                <div className="relative h-auto aspect-[1.75] w-full rounded-3xl overflow-hidden">
                    <div className="relative w-3/4 h-full aspect-[1.89]">
                        <Image
                            src={"/images/lacolina/page-bg.png"}
                            alt="intro-bg"
                            fill
                        />
                    </div>
                    <Image
                        src={"/images/lacolina/intro.png"}
                        alt="intro-pic"
                        width={577}
                        height={0}
                        className="absolute right-0 bottom-0 w-3/4 h-3/4"
                    />
                </div>
                <div className="text-justify text-sm">
                    {parse(t("intro.text"))}
                </div>
            </div>
        </>
    );
}
