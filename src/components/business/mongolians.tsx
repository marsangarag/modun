import Image from "next/image";
import TitleAnimation from "../animations/title";
import { ContextType } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import useDrag from "@/lib/helper/useDrag";

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>;

export default function Mongolians() {
    const { dragStart, dragStop, dragMove, dragging } = useDrag();

    const handleDrag =
        ({ scrollContainer }: scrollVisibilityApiType) =>
        (ev: React.MouseEvent) =>
            dragMove(ev, (posDiff) => {
                if (scrollContainer.current) {
                    scrollContainer.current.scrollLeft += posDiff;
                }
            });

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
            <div onMouseLeave={dragStop} className="cursor-grab my-10">
                <ScrollMenu
                    onMouseDown={() => dragStart}
                    onMouseMove={handleDrag}
                    onMouseUp={() => dragStop}
                >
                    {Array.from({ length: 12 }).map((_, index: number) => {
                        return (
                            <Image
                                src={`/images/business/mongolians/${
                                    index + 3
                                }.png`}
                                alt={`${index}-hool`}
                                width={400}
                                height={350}
                                className="aspect-auto object-cover min-h-[350px] max-h-[350px] cursor-grab min-w-[350px] md:min-w-[427px] "
                                key={index}
                            />
                        );
                    })}
                </ScrollMenu>
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
