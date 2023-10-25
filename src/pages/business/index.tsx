import Fade from "@/components/animations/fade";
import { businesses } from "@/lib/helper/constants";
import { NewsCardType } from "@/lib/types/news.type";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function BusinessPage() {
    const { t } = useTranslation("business");
    const [selected, setSelected] = useState<NewsCardType>(businesses[0]);

    return (
        <>
            <div className="relative h-full w-full">
                <Slide
                    onStartChange={(_, index) => setSelected(businesses[index])}
                    cssClass="relative"
                    duration={10000}
                    transitionDuration={500}
                    easing="ease"
                    arrows={false}
                    indicators
                >
                    {businesses.map((business) => (
                        <div
                            key={business.slug}
                            className="w-screen h-full aspect-[2.1]"
                            style={{
                                backgroundImage: `url(/images/business/${business.img}.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                            }}
                        ></div>
                    ))}
                </Slide>
            </div>
            <Fade
                direction="right"
                myKey={selected.img}
                className="main-width py-10 my-col-10"
            >
                <div className="font-extrabold text-huge">
                    {t(`${selected.img}.title`)}
                </div>
                <div className="text-justify text-sm">
                    {t(`${selected.img}.description`)}
                </div>
            </Fade>
        </>
    );
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
