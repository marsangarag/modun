import { NewsCardType } from "@/lib/types/news.type";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function BranchCard({ data }: { data: NewsCardType }) {
    const { t } = useTranslation("business");
    return (
        <div className="my-col-10 md:gap-y-20 main-width border-b border-color pb-14 md:pb-48">
            <div className="relative w-full h-auto aspect-video">
                <Image
                    src={`/images/business/full/${data?.img}.png`}
                    alt={`business-${data?.img}-image`}
                    fill
                />
            </div>
            <div className="my-col-10 md:gap-y-[50px]">
                <div className="text-huge font-bold w-1/2">
                    {t(`${data?.img}.subtitle`)}
                </div>
                <div className="text-sm text-justify">
                    {t(`${data?.img}.description`)}
                </div>
            </div>
        </div>
    );
}
