import Fade from "@/components/animations/fade";
import Ceo from "@/components/home/ceo";
import Group from "@/components/home/group";
import HR from "@/components/home/hr";
import GroupInfo from "@/components/home/info";
import LacolinaComponent from "@/components/home/lacolina";
import Logos from "@/components/home/logos";
import News from "@/components/home/news";
import SloganCard from "@/components/home/slogan-card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

export default function Home() {
    return (
        <div className="my-col-10 md:gap-y-20 xl:gap-y-24">
            <video loop autoPlay muted playsInline>
                <source src="/video/banner-vid.mp4" />
            </video>
            <Group />
            <Fade
                direction="up"
                className="w-screen relative h-auto aspect-[2.7]"
            >
                <Image src={"/images/history.png"} alt="company history" fill />
            </Fade>
            <GroupInfo />
            <Ceo />
            <div className="main-width lg:grid lg:grid-cols-3 my-col-10 gap-x-5">
                {Array.from({ length: 3 }).map((_, index) => {
                    return <SloganCard key={index} index={index} />;
                })}
            </div>
            <News />
            <LacolinaComponent />
            <Logos />
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
