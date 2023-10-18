import Ceo from "@/components/home/ceo";
import Group from "@/components/home/group";
import Logos from "@/components/home/logos";
import Slogans from "@/components/home/slogans";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-10 md:gap-y-20 xl:gap-y-24">
            <video loop autoPlay muted playsInline>
                <source src="/video/banner-vid.mp4" />
            </video>
            <Group />
            <Slogans />
            <Ceo />
            <Logos />
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["header", "footer", "home"])),
    },
});
