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
import BusinessFooter from "@/components/business/footer";

export default function BusinessPage() {
    const { t } = useTranslation("business");
    const [selected, setSelected] = useState<NewsCardType>(businesses[0]);
    const [direction, setDirection] = useState<"right" | "left">("right");

    const arrow = (rotate?: boolean) => {
        return (
            <div
                className={`relative h-auto w-[2%] aspect-[0.34] mx-2.5 md:mx-5 opacity-50 ${
                    rotate ? "" : "rotate-180"
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
            <div className="relative h-full w-full md:mt-0 cursor-grab">
                <Slide
                    {...arrows}
                    onStartChange={(firstIndex, lastIndex) => {
                        setDirection(
                            lastIndex > firstIndex
                                ? lastIndex === 0 && firstIndex === 5
                                    ? "left"
                                    : "right"
                                : firstIndex === 5
                                ? "right"
                                : "left"
                        );
                        setSelected(businesses[lastIndex]);
                    }}
                    cssClass="relative"
                    autoplay={false}
                    // duration={20000}
                    transitionDuration={500}
                    easing="ease"
                    indicators
                >
                    {businesses.map((business) => (
                        <div
                            key={business.slug}
                            className="w-screen h-full aspect-[2] md:aspect-[2.5]"
                            style={{
                                backgroundImage: `url(/images/business/${business.img}/banner.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                backgroundAttachment: "fixed",
                            }}
                        ></div>
                    ))}
                </Slide>
            </div>
            <div className="main-width py-10 my-col-10 md:gap-y-20 font-mont">
                <div className="my-col-5 md:gap-y-10">
                    <Fade
                        direction={direction}
                        myKey={selected.img}
                        className="font-extrabold text-huge"
                    >
                        {t(`${selected.img}.title`)}
                    </Fade>
                    <Fade
                        direction={direction}
                        myKey={selected.img}
                        className="text-justify relative text-sm"
                    >
                        <div className="absolute hidden sm:block -left-5 top-2 bg-blue w-0.5 h-[calc(100%-12px)]"></div>
                        {parse(t(`${selected.img}.description`))}
                    </Fade>
                </div>
            </div>
            <Fade myKey={selected.img} direction={direction}>
                {selected?.content ? <selected.content /> : null}
            </Fade>
            <BusinessFooter slug={selected.slug} />
        </>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, [
            "header",
            "footer",
            "business",
            "home",
        ])),
    },
});
