import { NewsCardType } from "@/lib/types/news.type";
import Fade from "../animations/fade";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import parse from "html-react-parser";

export default function NewsPageCard({
    index,
    data,
}: {
    index: number;
    data: NewsCardType;
}) {
    const router = useRouter();
    const { t } = useTranslation("news");

    const onMoreClick = () => {
        router.push(`/news/${data?.slug}`);
    };

    return (
        <Fade
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.1}
            className="odd:md:pt-20 odd:lg:pt-40 flex flex-col gap-y-10 md:gap-y-[70px] basis-[48%] w-full max-w-[600px]"
        >
            <div className="relative h-auto aspect-[0.85] w-full">
                <Image
                    src={`/images/news/${data?.img}.png`}
                    alt={`${data?.img}-image`}
                    className="object-cover object-left"
                    fill
                />
            </div>
            <div className="flex flex-col gap-y-5 items-start md:gap-y-[30px]">
                <div className="font-bold text-big">
                    {parse(t(`${data?.slug}.title`))}
                </div>
                <div className="text-sm line-clamp-2">
                    {parse(t(`${data?.slug}.subtitle`))}
                </div>
                <div onClick={onMoreClick} className="my-button self-end">
                    {t("seemore")}
                </div>
            </div>
        </Fade>
    );
}
