import TitleAnimation from "@/components/animations/title";
import AllNews from "@/components/news/all-news";
import { useThemeSwitcher } from "@/lib/helper";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

export default function NewsPage() {
    const { t } = useTranslation("news");
    const { theme } = useThemeSwitcher();

    return (
        <div className="flex flex-col gap-y-14 md:gap-y-24 py-[100px]">
            <div
                className={`main-width my-col-10 md:flex-row justify-between items-center ${
                    theme === "light"
                        ? "md:news-border border-0"
                        : "md:border-[5px] border-blue border-0"
                }`}
            >
                <div className="w-full md:w-[30%] italic text-huge text-center">
                    {t("title").toUpperCase()}
                </div>
                <div className=" h-auto aspect-[2.2] relative w-full md:w-[70%] -my-[5px] -mr-[5px]">
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
        ...(await serverSideTranslations(locale, ["header", "footer", "news"])),
    },
});
