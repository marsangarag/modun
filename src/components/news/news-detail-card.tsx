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
            <Fade
                direction="right"
                className={`relative w-full h-auto aspect-[1.5] ${
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
                <Image
                    src={`/icons/gradientgrid.svg`}
                    alt="grid"
                    width={100}
                    height={500}
                    className="hidden md:block right-0 absolute h-full"
                />
            </Fade>
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
