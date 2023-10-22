import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function BusinessPage() {
    return <div>йыбйыбйыбы</div>;
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, [
            "header",
            "footer",
            "business",
        ])),
    },
});
