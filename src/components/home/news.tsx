import { useTranslation } from "next-i18next";
import NewsCard from "./news-card";
import Fade from "../animations/fade";
import { news } from "@/lib/helper/constants";

export default function News() {
    const { t } = useTranslation("news");
    return (
        <div className="main-width my-col-10">
            <Fade direction="right" className="text-blue font-bold">
                {t("title")}
            </Fade>
            {news.map((item, index) => {
                return <NewsCard data={item} index={index} key={item.slug} />;
            })}
        </div>
    );
}
