import { NewsCardType } from "@/lib/types/news.type";
import Fade from "../animations/fade";
import Image from "next/image";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { useTranslation } from "next-i18next";
import { useThemeSwitcher } from "@/lib/helper";

export default function NewsPageCard({
    index,
    data,
}: {
    index: number;
    data: NewsCardType;
}) {
    const router = useRouter();
    const { t } = useTranslation("news");
    const { theme } = useThemeSwitcher();

    const onMoreClick = () => {
        router.push(`/news/${data?.slug}`);
    };

    return (
        <Fade
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.1}
            className="my-col-10 md:flex-row items-stretch gap-x-20 justify-between"
        >
            <div
                className={`relative h-auto w-full md:w-1/2 aspect-[1.78] ${
                    theme === "light"
                        ? "md:news-border border-0"
                        : "border-blue border-2"
                }`}
            >
                <Image
                    src={`/images/news/${data?.img}.png`}
                    alt={`news-image`}
                    className={`object-cover object-left`}
                    fill
                />
            </div>

            <div className="my-col-10 items-start justify-between w-full md:w-1/2">
                <div className="my-col-5 md:gap-y-[30px]">
                    <div className="font-bold text-big">
                        {parse(t(`${data?.slug}.title`))}
                    </div>
                    <div className="text-sm text-justify">
                        {t(`${data?.slug}.desc`)}
                    </div>
                </div>

                <div onClick={onMoreClick} className="my-button self-end">
                    {t("seemore")}
                </div>
            </div>
        </Fade>
    );
}
