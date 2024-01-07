import Image from "next/image";
import TitleAnimation from "../animations/title";
import { ContextType, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import useDrag from "@/lib/helper/useDrag";
import Ticker from "framer-motion-ticker";

export default function Mongolians() {
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    return (
        <>
            <div className="my-col-5 md:gap-y-10 main-width">
                <div className="my-col-5 md:flex-row gap-x-5">
                    <div className="w-full relative aspect-[1.5] md:w-3/5">
                        <Image
                            src={"/images/business/mongolians/0.png"}
                            alt="0"
                            fill
                        />
                    </div>
                    <div className="w-full relative aspect-square md:w-2/5">
                        <Image
                            src={"/images/business/mongolians/1.png"}
                            alt="1"
                            fill
                        />
                    </div>
                </div>
                <div className="text-center font-medium text-sm">
                    Орчин үеийн тансаг зэрэглэл бүхий тав тухтай орчинд найрсаг
                    үйлчилгээ, таныг урьж байна
                </div>
                <div className="w-full relative aspect-[2]">
                    <Image
                        src={"/images/business/mongolians/2.png"}
                        alt="2"
                        fill
                    />
                </div>
                <TitleAnimation
                    text="МОНГОЛ & ЕВРОП ХООЛНЫ СОЁЛ"
                    className="font-extrabold text-big"
                />
            </div>
            <div className="my-10">
                <Ticker
                    isPlaying={isPlaying}
                    onMouseEnter={() => setIsPlaying(false)}
                    onMouseLeave={() => setIsPlaying(true)}
                    duration={80}
                >
                    {Array.from({ length: 12 }).map((_, index: number) => {
                        return (
                            <div
                                key={index}
                                className="aspect-auto h-[350px] min-h-[350px] max-h-[350px]"
                            >
                                <img
                                    className="object-cover"
                                    src={`/images/business/mongolians/${
                                        index + 3
                                    }.png`}
                                    height={350}
                                    alt={`logo-${index + 1}`}
                                />
                            </div>
                        );
                    })}
                </Ticker>
            </div>

            <div className="my-col-5 lg:gap-y-10 main-width">
                <TitleAnimation
                    text="ӨВ УЛАМЖЛАЛАА ШИНГЭЭСЭН"
                    className="font-extrabold text-big"
                />
                <div className="w-full relative aspect-[2.2]">
                    <Image
                        src={"/images/business/mongolians/15.png"}
                        alt="15"
                        fill
                    />
                </div>
                <div className="my-col-5 md:flex-row gap-x-5">
                    <div className="flex flex-col justify-between w-full md:w-1/2">
                        <div className="w-full relative aspect-[1.6]">
                            <Image
                                src={"/images/business/mongolians/16.png"}
                                alt="16"
                                fill
                            />
                        </div>
                        <div className="w-full relative aspect-[1.6]">
                            <Image
                                src={"/images/business/mongolians/17.png"}
                                alt="17"
                                fill
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative aspect-[0.7]">
                        <Image
                            src={"/images/business/mongolians/18.png"}
                            alt="18"
                            fill
                        />
                    </div>
                </div>
                <div className="w-full relative aspect-[2]">
                    <Image
                        src={"/images/business/mongolians/19.png"}
                        alt="19"
                        fill
                    />
                </div>
                <TitleAnimation
                    text="V.I.P ROOMS"
                    className="font-extrabold text-big"
                />
                <div className="w-full relative aspect-[1.7]">
                    <Image
                        src={"/images/business/mongolians/20.png"}
                        alt="20"
                        fill
                    />
                </div>
                <div className="w-full relative aspect-[2]">
                    <Image
                        src={"/images/business/mongolians/21.png"}
                        alt="21"
                        fill
                    />
                </div>
                <div className="my-col-5 md:flex-row gap-x-5">
                    <div className="w-full md:w-1/2 relative aspect-[1.2]">
                        <Image
                            src={"/images/business/mongolians/22.png"}
                            alt="22"
                            fill
                        />
                    </div>
                    <div className="w-full md:w-1/2 relative aspect-[1.2]">
                        <Image
                            src={"/images/business/mongolians/23.png"}
                            alt="23"
                            fill
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
