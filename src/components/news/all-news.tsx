import { news } from "@/lib/helper/constants";
import NewsPageCard from "./card";
import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";

export default function AllNews({ detail = false }: { detail?: boolean }) {
    const { t } = useTranslation("news");
    return (
        <>
            {detail ? (
                <TitleAnimation
                    text={t("other").toUpperCase()}
                    className="text-huge"
                />
            ) : null}
            <div className="my-col-20 main-width">
                {news?.reverse().map((item, index: number) => {
                    return (
                        <NewsPageCard
                            key={item.slug}
                            index={index}
                            data={item}
                        />
                    );
                })}
            </div>
        </>
    );
}
