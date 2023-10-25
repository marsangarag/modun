import Fade from "@/components/animations/fade";
import { businesses } from "@/lib/helper/constants";
import { NewsCardType } from "@/lib/types/news.type";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import parse from "html-react-parser";

export default function BusinessPage() {
    const { t } = useTranslation("business");
    const [selected, setSelected] = useState<NewsCardType>(businesses[0]);
    const [direction, setDirection] = useState<"right" | "left">("right");

    const arrow = (rotate?: boolean) => {
        return (
            <div
                className={`relative w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 mx-2.5 md:mx-5 ${
                    rotate ? "rotate-180" : ""
                }`}
            >
                <Image src={"/icons/arrow.svg"} alt="prev-arrow" fill />
            </div>
        );
    };

    const arrows = {
        prevArrow: arrow(),
        nextArrow: arrow(true),
    };

    return (
        <>
            <div className="relative h-full w-full md:mt-20 mt-0 cursor-grab">
                <Slide
                    {...arrows}
                    onStartChange={(firstIndex, lastIndex) => {
                        setDirection(
                            lastIndex > firstIndex
                                ? lastIndex === 0 && firstIndex === 6
                                    ? "left"
                                    : "right"
                                : firstIndex === 6
                                ? "right"
                                : "left"
                        );
                        setSelected(businesses[lastIndex]);
                    }}
                    cssClass="relative"
                    duration={10000}
                    transitionDuration={500}
                    easing="ease"
                    indicators
                >
                    {businesses.map((business) => (
                        <div
                            key={business.slug}
                            className="w-screen h-full aspect-[2] md:aspect-[3]"
                            style={{
                                backgroundImage: `url(/images/business/${business.img}.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundAttachment: "fixed",
                            }}
                        ></div>
                    ))}
                </Slide>
            </div>
            <Fade
                direction={direction}
                myKey={selected.img}
                className="main-width py-10 my-col-10 font-mont"
            >
                <div className="font-extrabold text-huge">
                    {t(`${selected.img}.title`)}
                </div>
                <div className="text-justify text-sm">
                    {parse(t(`${selected.img}.description`))}
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
