import { news } from "@/lib/helper/constants";
import NewsPageCard from "./card";
import Fade from "../animations/fade";
import { useTranslation } from "next-i18next";

export default function AllNews() {
    const { t } = useTranslation("news");
    return (
        <>
            <Fade direction="up" className="my-col-5 main-width">
                <div className="text-blue font-mont font-bold">
                    {t("title")}
                </div>
                <div className="text-base md:text-huge font-extrabold">
                    {t("description").toUpperCase()}
                </div>
            </Fade>
            <div className="main-width my-col-10 md:gap-y-14">
                <div className="my-col-20 md:flex-row justify-between flex-wrap">
                    {news?.map((item, index: number) => {
                        return (
                            <NewsPageCard
                                key={item.slug}
                                index={index}
                                data={item}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
