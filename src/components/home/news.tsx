import { useTranslation } from "next-i18next";
import NewsCard from "./news-card";
import { news } from "@/lib/helper/constants";

export default function News() {
    return (
        <div className="main-width my-col-10 md:gap-y-20 pt-10">
            {news.map((item, index) => {
                return <NewsCard data={item} index={index} key={item.slug} />;
            })}
        </div>
    );
}
