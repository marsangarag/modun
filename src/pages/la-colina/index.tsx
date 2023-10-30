import Advantages from "@/components/lacolina/advantages";
import Brands from "@/components/lacolina/brands";
import ColinaCard from "@/components/lacolina/card";
import LacolinaHero from "@/components/lacolina/hero";
import ColinaIntro from "@/components/lacolina/intro";
import ColinaMidHero from "@/components/lacolina/mid-hero";
import Rooms from "@/components/lacolina/rooms";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function LaColinaPage() {
    return (
        <>
            <LacolinaHero />
            <video loop autoPlay muted playsInline>
                <source src="/video/lacolina.mp4" />
            </video>
            <div className="main-width my-col-10 md:gap-y-36 py-10 md:py-36">
                <ColinaIntro />
                <Advantages />
                <ColinaCard pos="left" myKey="eco" />
                <ColinaCard pos="right" myKey="luxury" />
            </div>
            <ColinaMidHero />
            <Rooms />
            <div className="main-width my-col-10 md:gap-y-36">
                <ColinaCard pos="right" myKey="time" />
                <Brands />
            </div>
        </>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, [
            "header",
            "footer",
            "lacolina",
        ])),
    },
});
