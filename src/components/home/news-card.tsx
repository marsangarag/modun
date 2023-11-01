import { useTranslation } from "next-i18next";
import Image from "next/image";
import Fade from "../animations/fade";
import { NewsCardType } from "@/lib/types/news.type";
import { useRouter } from "next/router";
import parse from "html-react-parser";

export default function NewsCard({
    data,
    index,
}: {
    data: NewsCardType;
    index: number;
}) {
    const { t } = useTranslation("news");
    const router = useRouter();

    const onMoreClick = () => {
        router.push(`news/${data?.slug}`);
    };
    return (
        <Fade
            direction="right"
            delay={index * 0.1}
            className="flex flex-col gap-y-5 md:flex-row gap-x-10 lg:gap-x-20 border-b-2 border-color last:border-none pb-10 md:pb-20 md:items-center xl:items-stretch"
        >
            <div className="relative w-full md:w-1/2 aspect-[1.8] h-auto">
                <Image
                    src={`/images/news/${data?.img}.png`}
                    alt={`newsimg-${data?.img}`}
                    fill
                />
            </div>
            <div className="flex flex-col justify-between gap-y-5 items-start w-full md:w-1/2">
                <div className="my-col-5 lg:gap-y-10">
                    <div className="text-big xl:text-bigger font-bold">
                        {parse(t(`${data?.slug}.title`).toUpperCase())}
                    </div>
                    <div className="text-sm md:pl-5  text-justify relative">
                        <div className="absolute hidden md:block left-0 top-2 bg-blue w-0.5 h-[calc(100%-12px)]"></div>
                        {t(`${data?.slug}.desc`)}
                    </div>
                </div>
                <div onClick={onMoreClick} className="my-button">
                    {t("seemore")}
                </div>
            </div>
        </Fade>
    );
}
