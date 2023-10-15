import Ceo from "@/components/home/ceo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
    return (
        <div className="flex flex-col ">
            <video
                loop
                autoPlay
                muted
                playsInline
                className="lg:-mt-[100px] border-none"
            >
                <source src="/video/banner-vid.mp4" />
            </video>
            <Ceo />
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["header", "footer", "home"])),
    },
});
