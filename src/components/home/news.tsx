import { useTranslation } from "next-i18next";
import NewsCard from "./news-card";

export default function News() {
    const { t } = useTranslation("news");
    return (
        <div className="main-width my-col-10">
            <div className="text-blue font-bold">{t("title")}</div>
            {Array.from({ length: 2 }).map((_, index: number) => {
                return <NewsCard index={index} key={index + 1} />;
            })}
        </div>
    );
}
