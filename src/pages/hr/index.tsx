import PageTitle from "@/components/common/title";
import HrForm from "@/components/hr/form";
import Map from "@/components/hr/map";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function HR() {
    const { t } = useTranslation("hr");
    return (
        <div className="my-col-10 md:gap-y-24">
            <PageTitle subtitle={t("subtitle")} title={t("title")} />
            <HrForm />
            <Map />
        </div>
    );
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["header", "footer", "hr"])),
    },
});
