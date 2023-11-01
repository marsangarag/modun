import Map from "@/components/hr/map";
import Advantages from "@/components/lacolina/advantages";
import Brands from "@/components/lacolina/brands";
import ColinaCard from "@/components/lacolina/card";
import Contacts from "@/components/lacolina/contacts";
import ColinaIntro from "@/components/lacolina/intro";
import Rooms from "@/components/lacolina/rooms";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function LaColinaPage() {
    return (
        <>
            <video className="-mt-20" loop autoPlay muted playsInline>
                <source src="/video/lacolina.mp4" />
            </video>
            {/* <LacolinaHero /> */}
            <ColinaIntro />
            <Rooms />
            <div className="main-width my-col-10 md:gap-y-20">
                <ColinaCard pos="right" myKey="time" />
                <Advantages />
                <ColinaCard pos="left" myKey="eco" />
                <ColinaCard pos="right" myKey="luxury" />
                <Brands />
                <Contacts />
            </div>
            {/* <ColinaMidHero /> */}
            <div className="pt-10 md:pt-36">
                <Map />
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
