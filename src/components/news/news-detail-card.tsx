import { NewsCardType } from "@/lib/types/news.type";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import parse from "html-react-parser";
import Fade from "../animations/fade";

export default function NewsDetailCard({ data }: { data: NewsCardType }) {
    const { t } = useTranslation("news");

    return (
        <div className="my-col-10 md:gap-y-20 main-width border-b border-blue pb-14 md:pb-48">
            <Fade
                direction="right"
                className="relative w-full h-auto aspect-video"
            >
                <Image
                    src={`/images/news/${data?.img}.png`}
                    alt={`business-${data?.img}-image`}
                    fill
                />
            </Fade>
            <div className="my-col-10 md:gap-y-[50px]">
                <div className="my-col-10 md:grid grid-cols-4 items-start md:items-center">
                    <Fade
                        direction="right"
                        delay={0.1}
                        className="text-huge font-bold col-span-3"
                    >
                        {parse(t(`${data?.slug}.title`))}
                    </Fade>
                    <Fade direction="right" delay={0.2} className="col-span-1">
                        <div className="font-bold text-big">Х.Галмандах</div>
                        <div className="text-sm">Сэтгүүлч</div>
                    </Fade>
                </div>
                <Fade
                    direction="up"
                    delay={0.3}
                    className="text-sm text-justify my-col-5"
                >
                    {parse(t(`${data?.slug}.subtitle`))}
                </Fade>
            </div>
        </div>
    );
}
