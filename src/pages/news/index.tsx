import TitleAnimation from "@/components/animations/title";
import AllNews from "@/components/news/all-news";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

export default function NewsPage() {
    const { t } = useTranslation("news");

    return (
        <div className="flex flex-col gap-y-14 md:gap-y-24 py-10 md:py-[100px] ">
            <div
                className={`main-width my-col-10 md:flex-row justify-between items-center border-0 md:border-color md:border-[5px]`}
            >
                <div className="w-full md:w-[30%] px-5 italic text-bigger font-medium text-center">
                    {t("title").toUpperCase()}
                </div>
                <div className="h-auto aspect-[2.1] relative w-full md:w-[70%] -my-[5px] -mr-[6px]">
                    <Image src={"/images/news.png"} alt="news-header" fill />
                </div>
            </div>
            <div className="main-width flex flex-col">
                <TitleAnimation
                    text={t("subtitle").toUpperCase()}
                    className="text-bigger"
                />
            </div>
            <AllNews />
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["news", "header", "footer"])),
    },
});
