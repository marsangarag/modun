import { NewsCardType } from "@/lib/types/news.type";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import parse from "html-react-parser";
import Fade from "../animations/fade";
import { useThemeSwitcher } from "@/lib/helper";

export default function NewsDetailCard({ data }: { data: NewsCardType }) {
    const { t } = useTranslation("news");
    const { theme } = useThemeSwitcher();

    return (
        <div className="my-col-10 md:gap-y-20 border-b border-blue pb-14 md:pb-48">
            <div className="w-screen relative aspect-[2.66] h-auto">
                <Fade
                    direction="right"
                    className={`relative main-width h-auto aspect-[1.5] ${
                        theme === "light"
                            ? "md:news-border border-0"
                            : "border-blue border-2"
                    }`}
                >
                    <Image
                        src={`/images/news/${data?.img}.png`}
                        alt={`business-${data?.img}-image`}
                        fill
                    />
                </Fade>
                <div className="absolute opacity-50 -z-10 left-0 top-1/2 -translate-y-1/2 h-full w-1/4 rotate-180">
                    <Image src={`/icons/news-grid.svg`} alt="grid" fill />
                </div>
                <div className="absolute opacity-50 -z-10 right-0 top-1/2 -translate-y-1/2 h-full w-1/4 ">
                    <Image src={`/icons/news-grid.svg`} alt="grid" fill />
                </div>
                <div className="absolute center w-full text-center my-col-5"></div>
            </div>

            <div className="main-width">
                <div className="my-col-10 md:gap-y-[50px]">
                    <Fade
                        direction="right"
                        delay={0.1}
                        className="text-huge font-bold"
                    >
                        {parse(t(`${data?.slug}.title`))}
                    </Fade>
                    <Fade
                        direction="up"
                        delay={0.3}
                        className="text-sm text-justify my-col-5"
                    >
                        {parse(t(`${data?.slug}.subtitle`))}
                    </Fade>
                </div>
            </div>
        </div>
    );
}
