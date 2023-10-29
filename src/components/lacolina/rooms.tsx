import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export default function Rooms() {
    const { t } = useTranslation("lacolina");
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-135%"]);

    return (
        <div className="flex flex-col">
            <TitleAnimation
                className="sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] font-extrabold"
                lacolina={true}
                text={t("intro.title").toUpperCase()}
            />
            <div
                className="hidden md:block -my-[100px] relative h-[300vh] w-full"
                ref={targetRef}
            >
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        {Array.from({ length: 10 }).map((_, index: number) => {
                            return (
                                <Image
                                    src={`/images/lacolina/rooms/${index}.jpg`}
                                    alt={`${index}-room`}
                                    width={900}
                                    height={900}
                                    key={index}
                                />
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
