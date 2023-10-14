import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-10">
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
            <div>hasdhashd</div>
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["header"])),
    },
});
