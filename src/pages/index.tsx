import Ceo from "@/components/home/ceo";
import Group from "@/components/home/group";
import HR from "@/components/home/hr";
import LacolinaComponent from "@/components/home/lacolina";
import Logos from "@/components/home/logos";
import News from "@/components/home/news";
import Slogans from "@/components/home/slogans";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
    return (
        <div className="my-col-10 md:gap-y-20 xl:gap-y-24">
            <video loop autoPlay muted playsInline>
                <source src="/video/banner-vid.mp4" />
            </video>
            <Group />
            <Slogans />
            <Ceo />
            <Logos />
            <News />
            <LacolinaComponent />
            <HR />
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, [
            "header",
            "footer",
            "home",
            "news",
        ])),
    },
});
