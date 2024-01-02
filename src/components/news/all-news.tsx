import { news } from "@/lib/helper/constants";
import NewsPageCard from "./card";
import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";
import { useRouter } from "next/router";

export default function AllNews({ detail = false }: { detail?: boolean }) {
    const { t } = useTranslation("news");
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            {detail ? (
                <TitleAnimation
                    text={t("other").toUpperCase()}
                    className="text-huge "
                />
            ) : null}
            <div className="my-col-20 main-width">
                {news
                    ?.filter((item) => (detail ? item.slug !== slug : item))
                    ?.map((item, index: number) => {
                        return (
                            <NewsPageCard
                                key={item.slug}
                                index={index}
                                data={item}
                                detail={detail}
                            />
                        );
                    })}
            </div>
        </>
    );
}
