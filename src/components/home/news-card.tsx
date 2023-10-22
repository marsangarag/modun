import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function NewsCard({ index }: { index: number }) {
    const { t } = useTranslation("news");

    return (
        <div className="flex flex-col gap-y-5 md:grid grid-cols-2 gap-x-10 lg:gap-x-20 border-b border-color last:border-none pb-10 md:pb-20">
            <div className="relative w-full aspect-[1.39] h-auto">
                <Image
                    src={`/images/news/${index}.png`}
                    alt={`newsimg-${index}`}
                    fill
                />
            </div>
            <div className="flex flex-col justify-between gap-y-5">
                <div className="my-col-5 lg:gap-y-10">
                    <div className="text-big xl:text-bigger font-bold">
                        {t(`${index}.title`)}
                    </div>
                    <div className="text-sm xl:text-base">
                        {t(`${index}.subtitle`)}
                    </div>
                </div>
                <div className="text-blue italic cursor-pointer">
                    {t("seemore")}
                </div>
            </div>
        </div>
    );
}
