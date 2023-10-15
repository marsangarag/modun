import Image from "next/image";
import Fade from "../animations/fade";
import { useTranslation } from "next-i18next";

export default function Ceo() {
    const { t } = useTranslation("home");
    return (
        <div className="flex flex-col gap-10 lg:grid grid-cols-5 items-center lg:items-start  lg:pl-10">
            <div className="flex flex-col gap-y-8 col-span-3 w-full pt-16 px-10 items-center lg:items-end">
                <Fade
                    direction="left"
                    className="text-3xl font-bold text-center lg:text-end"
                >
                    {t("ceo.title")}
                </Fade>
                <Fade
                    delay={0.4}
                    direction="up"
                    className="text-justify flex flex-col gap-y-4"
                >
                    <div>{t("ceo.text.1")}</div>
                    <div>{t("ceo.text.2")}</div>
                    <div>{t("ceo.text.3")}</div>
                    <div>{t("ceo.text.4")}</div>
                </Fade>
            </div>
            <Fade
                className="relative w-full col-span-2 h-full aspect-[0.66] pt-10 lg:pt-0"
                direction="right"
                delay={0.2}
            >
                <Image src={"/images/ceo.jpg"} alt="modun-ceo" fill />
            </Fade>
        </div>
    );
}
