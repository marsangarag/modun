import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";
import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";

export default function Rooms() {
    const { t } = useTranslation("lacolina");
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);
    const ghostRef = useRef<HTMLDivElement | null>(null);
    const [scrollRange, setScrollRange] = useState<number>(0);
    const [viewport, setViewport] = useState<number>(0);

    useEffect(() => {
        if (scrollRef?.current?.scrollWidth) {
            setScrollRange(scrollRef.current.scrollWidth);
        }
    }, [scrollRef]);

    const onResize = useCallback((entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
            setViewport(entry.contentRect.width);
        }
    }, []);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            onResize(entries)
        );
        if (ghostRef?.current) {
            resizeObserver.observe(ghostRef.current);
        }
        return () => resizeObserver.disconnect();
    }, [onResize]);

    const { scrollYProgress } = useScroll({ target: targetRef });

    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollRange + viewport]
    );

    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const x = useSpring(transform, physics);

    return (
        <>
            <div className="my-col-10">
                <TitleAnimation
                    className="text-big font-extrabold"
                    lacolina={true}
                    text={t("room").toUpperCase()}
                />
                <div
                    ref={targetRef}
                    className="-mt-[calc(50vh-150px)] -mb-[calc(50vh-200px)] md:-mt-[calc(50vh-250px)] md:-mb-[calc(50vh-300px)] lg:-mt-[calc(50vh-300px)] lg:-mb-[calc(50vh-350px)] xl:-mt-[calc(50vh-350px)] xl:-mb-[calc(50vh-400px)] "
                >
                    <div className="sticky top-0 h-screen will-change-transform overflow-hidden">
                        <motion.div
                            ref={scrollRef}
                            style={{ x }}
                            className="relative h-full w-max items-center flex"
                        >
                            {Array.from({ length: 10 }).map(
                                (_, index: number) => {
                                    return (
                                        <Image
                                            src={`/images/lacolina/rooms/${index}.jpg`}
                                            alt={`${index}-room`}
                                            width={400}
                                            height={400}
                                            className="aspect-square w-[250px] md:w-[400px] lg:w-[500px] xl:w-[600px]"
                                            key={index}
                                        />
                                    );
                                }
                            )}
                        </motion.div>
                    </div>
                    <div
                        ref={ghostRef}
                        style={{ height: scrollRange }}
                        className="w-screen"
                    />
                </div>
            </div>
        </>
    );
}
