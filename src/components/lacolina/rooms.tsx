import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import useDrag from "@/lib/helper/useDrag";
import { ContextType } from "react";

type scrollVisibilityApiType = ContextType<typeof VisibilityContext>;

export default function Rooms() {
    const { t } = useTranslation("lacolina");
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
            <div className="my-col-10">
                <TitleAnimation
                    className="text-big font-extrabold"
                    lacolina={true}
                    text={t("room").toUpperCase()}
                />
                <div
                    onMouseLeave={dragStop}
                    className="mt-10 mb-20 cursor-grab"
                >
                    <ScrollMenu
                        onMouseDown={() => dragStart}
                        onMouseMove={handleDrag}
                        onMouseUp={() => dragStop}
                    >
                        {Array.from({ length: 10 }).map((_, index: number) => {
                            return (
                                <Image
                                    src={`/images/lacolina/rooms/${index}.jpg`}
                                    alt={`${index}-room`}
                                    width={400}
                                    height={400}
                                    className="aspect-square cursor-grab min-w-[250px] md:min-w-[427px] "
                                    key={index}
                                />
                            );
                        })}
                    </ScrollMenu>
                </div>
            </div>
        </>
    );
}
