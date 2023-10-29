import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";

export default function Advantages() {
    const { t } = useTranslation("lacolina");

    return (
        <>
            <TitleAnimation
                className="sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] font-extrabold"
                lacolina={true}
                text={t("advantages.title").toUpperCase()}
            />
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                className="w-full"
                spaceBetween={50}
                slidesPerView={5}
                autoplay={{ delay: 10000, disableOnInteraction: true }}
                edgeSwipeDetection="prevent"
                loop
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
}
