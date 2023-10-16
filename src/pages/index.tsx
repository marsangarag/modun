import Ceo from "@/components/home/ceo";
import Group from "@/components/home/group";
import Logos from "@/components/home/logos";
import Slogans from "@/components/home/slogans";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
    return (
        <div className="flex flex-col ">
            <video
                loop
                autoPlay
                muted
                playsInline
                className="md:-mt-[100px] border-none"
            >
                <source src="/video/banner-vid.mp4" />
            </video>
            <Ceo />
            <Slogans />
            <Group />
            <Logos />
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["header", "footer", "home"])),
    },
});
