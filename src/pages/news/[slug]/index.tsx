import AllNews from "@/components/news/all-news";
import NewsDetailCard from "@/components/news/news-detail-card";
import { news } from "@/lib/helper/constants";
import { NewsCardType } from "@/lib/types/news.type";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NewsDetailPage({ data }: { data: NewsCardType }) {
    return (
        <div className="flex flex-col gap-y-14 md:gap-y-24 py-[100px]">
            <NewsDetailCard data={data} />
            <AllNews detail={true} />
        </div>
    );
}

export const getStaticProps = async ({
    locale,
    params,
}: {
    locale: string;
    params: any;
}) => {
    const { slug } = params || {};
    const data = news.find((item) => item.slug === slug);
    return {
        props: {
            data,
            ...(await serverSideTranslations(locale, [
                "header",
                "footer",
                "news",
            ])),
        },
    };
};

export async function getStaticPaths() {
    const paths = news.map((item) => {
        return {
            params: { slug: item.slug },
        };
    });

    return {
        paths,
        fallback: true,
    };
}
