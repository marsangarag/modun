import Fade from "@/components/animations/fade";
import TitleAnimation from "@/components/animations/title";
import Ceo from "@/components/home/ceo";
import Group from "@/components/home/group";
import HR from "@/components/home/hr";
import GroupInfo from "@/components/home/info";
import LacolinaComponent from "@/components/home/lacolina";
import Logos from "@/components/home/logos";
import NewsCard from "@/components/home/news-card";
import SloganCard from "@/components/home/slogan-card";
import { news } from "@/lib/helper/constants";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

export default function Home() {
    const { t } = useTranslation("news");
    return (
        <div className="my-col-10 md:gap-y-20 xl:gap-y-24 -mt-20">
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
            <div className="main-width md:grid grid-cols-3 my-col-5 items-center gap-x-5">
                {Array.from({ length: 3 }).map((_, index) => {
                    return <SloganCard key={index} index={index} />;
                })}
            </div>
            <div className="main-width my-col-10 md:gap-y-20 pt-10">
                <TitleAnimation text={t("caption")} />
                {news
                    .slice(news.length - 2)
                    .reverse()
                    .map((item, index) => {
                        return (
                            <NewsCard
                                data={item}
                                index={index}
                                key={item.slug}
                            />
                        );
                    })}
            </div>
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
