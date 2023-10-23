import Businesses from "@/components/business/businesses";
import PageTitle from "@/components/common/title";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NewsPage() {
    const { t } = useTranslation("news");
    return (
        <div className="flex flex-col gap-y-14 md:gap-y-24 pb-14 md:pb-48">
            <PageTitle title={t("title")} />
            <Businesses />
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["header", "footer", "news"])),
    },
});
