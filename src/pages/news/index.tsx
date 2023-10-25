import Fade from "@/components/animations/fade";
import PageTitle from "@/components/common/title";
import AllNews from "@/components/news/all-news";
import NewsPageCard from "@/components/news/card";
import { news } from "@/lib/helper/constants";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NewsPage() {
    const { t } = useTranslation("news");
    return (
        <div className="flex flex-col gap-y-14 md:gap-y-24 pb-14">
            <PageTitle title={t("title")} subtitle={t("subtitle")} />
            <AllNews />
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["header", "footer", "news"])),
    },
});
