import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Frame } from "../icons";
import { useState } from "react";

export default function Advantages() {
    const { t } = useTranslation("lacolina");
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="py-2.5 my-col-10 items-center">
            <div
                className={`h-0.5 w-full bg-gradient-to-r from-colina to-blue`}
            ></div>
            <div className="text-big font-extrabold">
                {t("advantages.title").toUpperCase()}
            </div>
            <div className="w-full mx-auto h-full overflow-hidden">
                <Swiper
                    modules={[
                        Autoplay,
                        Pagination,
                        EffectCoverflow,
                        Navigation,
                    ]}
                    effect="coverflow"
                    className="mb-10 relative"
                    slidesPerView={3}
                    grabCursor
                    navigation
                    spaceBetween={-100}
                    pagination={{ clickable: true }}
                    centeredSlides
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    edgeSwipeDetection="prevent"
                    coverflowEffect={{
                        slideShadows: false,
                        rotate: 0,
                        modifier: 2,
                        depth: 100,
                    }}
                    onActiveIndexChange={({ realIndex }) =>
                        setActiveIndex(realIndex)
                    }
                    loop
                >
                    {Array.from({ length: 18 }).map((card, index) => {
                        return (
                            <SwiperSlide
                                className="relative aspect-[1.73] w-full"
                                key={index}
                            >
                                {({ isActive, isNext, isPrev }) => (
                                    <>
                                        <Image
                                            className={`rounded-3xl object-fill ${
                                                isActive
                                                    ? ""
                                                    : isNext || isPrev
                                                    ? "opacity-70"
                                                    : "opacity-50"
                                            }`}
                                            src={`/images/lacolina/advantages/${index}.png`}
                                            alt={`advantage-${index}`}
                                            fill
                                        />
                                        <Frame isActive={isActive} />
                                    </>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="text-center text-bigger">
                    {t(`advantages.${activeIndex}.title`).toUpperCase()}
                </div>
                <div className="text-center font-bold main-width">
                    {t(`advantages.${activeIndex}.text`)}
                </div>
            </div>
            <div
                className={`h-0.5 w-full bg-gradient-to-r from-colina to-blue`}
            ></div>
        </div>
    );
}
