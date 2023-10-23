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
            className="flex flex-col gap-y-5 md:grid grid-cols-2 gap-x-10 lg:gap-x-20 border-b border-color last:border-none pb-10 md:pb-20"
        >
            <div className="relative w-full aspect-[1.39] h-auto">
                <Image
                    src={`/images/news/${data?.img}.png`}
                    alt={`newsimg-${data?.img}`}
                    fill
                />
            </div>
            <div className="flex flex-col justify-between gap-y-5 items-start">
                <div className="my-col-5 lg:gap-y-10">
                    <div className="text-big xl:text-bigger font-bold">
                        {parse(t(`${data?.slug}.title`))}
                    </div>
                    <div className="text-sm xl:text-base line-clamp-2 text-justify">
                        {parse(t(`${data?.slug}.subtitle`))}
                    </div>
                </div>
                <div
                    onClick={onMoreClick}
                    className="rounded-3xl py-2.5 px-5 bg-reverse text-reverse text-[16px] cursor-pointer font-semibold"
                >
                    {t("seemore")}
                </div>
            </div>
        </Fade>
    );
}
