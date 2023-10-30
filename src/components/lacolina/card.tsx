import { useTranslation } from "next-i18next";
import Image from "next/image";
import Fade from "../animations/fade";
import parse from "html-react-parser";

export default function ColinaCard({
    myKey,
    pos,
}: {
    myKey: string;
    pos: "left" | "right";
}) {
    const { t } = useTranslation("lacolina");
    return (
        <Fade
            direction={pos}
            delay={0.1}
            className={`my-col-5 md:flex-row justify-between items-stretch border-0 md:border-[5px] colina-border`}
        >
            <div className="w-full my-col-5 md:my-col-10 p-5 md:p-10 colina-border md:border-0">
                <div className="font-mont text-big font-medium text-center">
                    {t(`cards.${myKey}.title`).toUpperCase()}
                </div>

                <div className="text-justify text-sm">
                    {parse(t(`cards.${myKey}.text`))}
                </div>
            </div>
            <div
                className={`h-auto aspect-[1.77] relative w-full -my-[5px]  ${
                    pos === "left"
                        ? "order-[-1] -ml-[5px]"
                        : "md:order-1 order-[-1] -mr-[5px]"
                }`}
            >
                <Image
                    src={`/images/lacolina/${myKey}.png`}
                    alt={`${myKey}-image`}
                    fill
                    className={`object-cover object-${pos}`}
                />
            </div>
        </Fade>
    );
}
