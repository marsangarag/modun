import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";
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
        <>
            <TitleAnimation
                className="text-big font-extrabold"
                lacolina={true}
                text={t("advantages.title").toUpperCase()}
            />
            <div className="w-full md:w-2/3 mx-auto h-full overflow-hidden">
                <Swiper
                    modules={[
                        Autoplay,
                        Navigation,
                        Pagination,
                        EffectCoverflow,
                    ]}
                    effect="coverflow"
                    className="mb-10"
                    slidesPerView={4}
                    grabCursor
                    spaceBetween={-50}
                    pagination={{ clickable: true }}
                    navigation
                    centeredSlides
                    autoplay={{ delay: 10000, disableOnInteraction: true }}
                    edgeSwipeDetection="prevent"
                    coverflowEffect={{
                        slideShadows: false,
                        rotate: 0,
                        modifier: 0.5,
                        depth: 250,
                    }}
                    onActiveIndexChange={({ realIndex }) =>
                        setActiveIndex(realIndex)
                    }
                    loop
                >
                    {Array.from({ length: 18 }).map((card, index) => {
                        return (
                            <SwiperSlide
                                className="relative h-auto aspect-[0.7] w-full"
                                key={index}
                            >
                                {({ isActive }) => (
                                    <>
                                        <Image
                                            className={`rounded-3xl`}
                                            src={`/images/lacolina/advantages/${index}.png`}
                                            alt={`advantage-${index}`}
                                            fill
                                        />
                                        <div className="absolute inset-2 md:inset-5">
                                            <Frame isActive={isActive} />
                                        </div>
                                    </>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="text-center text-bigger">
                    {t(`advantages.${activeIndex}.title`).toUpperCase()}
                </div>
                <div className="text-center font-bold">
                    {t(`advantages.${activeIndex}.text`)}
                </div>
            </div>
        </>
    );
}
