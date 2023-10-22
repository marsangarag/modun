import BranchCard from "@/components/business/branch-card";
import Businesses from "@/components/business/businesses";
import PageTitle from "@/components/common/title";
import { businesses } from "@/lib/helper/constants";
import { NewsCardType } from "@/lib/types/news.type";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function BusinessBranch({ data }: { data: NewsCardType }) {
    const { t } = useTranslation("business");

    return (
        <div className="my-col-10 md:gap-y-24">
            <PageTitle
                title={t(`${data.img}.title`)}
                subtitle={t(`${data.img}.slogan`)}
            />
            <BranchCard data={data} />
            <div className="py-14 md:py-48">
                <Businesses less={data.img} />
            </div>
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
    const { branch } = params || {};
    const data = businesses.find((item) => item.slug === branch);
    return {
        props: {
            data,
            ...(await serverSideTranslations(locale, [
                "header",
                "footer",
                "business",
            ])),
        },
    };
};

export async function getStaticPaths() {
    const paths = businesses.map((business) => {
        return {
            params: { branch: business.slug },
        };
    });

    return {
        paths,
        fallback: true,
    };
}
