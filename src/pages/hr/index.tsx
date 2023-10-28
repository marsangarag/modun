import HrForm from "@/components/hr/form";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import parse from "html-react-parser";
import TitleAnimation from "@/components/animations/title";

export default function HR() {
    const { t } = useTranslation("hr");

    return (
        <div className="my-col-10 md:gap-y-24 pb-10 md:pb-24">
            <div className="relative h-auto w-screen aspect-[1.9]">
                <Image src={"/images/hr-banner.png"} alt="hr-banner" fill />
                <div className="absolute  text-[#D9D8D4] w-2/3 left-[10%] top-[10%] text-[14px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] font-mont font-extrabold">
                    {t("subtitle").toUpperCase()}
                </div>
            </div>
            <div className="relative main-width font-mont text-big">
                <div className="absolute hidden sm:block -left-5 top-2 bg-blue w-0.5 h-[calc(100%-12px)]"></div>
                {parse(t("invite"))}
            </div>
            <TitleAnimation
                text={t("caption").toUpperCase()}
                className="text-bigger font-extrabold my-10"
            />
            <HrForm />
        </div>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["header", "footer", "hr"])),
    },
});
