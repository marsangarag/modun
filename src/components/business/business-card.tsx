import { NewsCardType } from "@/lib/types/news.type";
import Image from "next/image";
import Fade from "../animations/fade";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function BusinessCard({
    data,
    index,
}: {
    data: NewsCardType;
    index: number;
}) {
    const { t } = useTranslation("business");
    const router = useRouter();
    const onMoreClick = () => {
        router.push(`/business/${data?.slug}`);
    };
    return (
        <Fade
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.1}
            className="odd:md:pt-20 odd:lg:pt-40 flex flex-col gap-y-10 md:gap-y-[70px] basis-[48%] w-full max-w-[600px]"
        >
            <div className="relative h-auto aspect-[0.85] w-full">
                <Image
                    src={`/images/business/${data?.img}.png`}
                    alt={`${data?.img}-image`}
                    fill
                />
            </div>
            <div className="flex flex-col gap-y-5 items-start md:gap-y-[30px]">
                <div className="font-bold text-big">
                    {t(`${data?.img}.title`)}
                </div>
                <div className="text-sm line-clamp-2">
                    {t(`${data?.img}.description`)}
                </div>
                <div onClick={onMoreClick} className="my-button">
                    {t("seemore")}
                </div>
            </div>
        </Fade>
    );
}
