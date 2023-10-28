import { useThemeSwitcher } from "@/lib/helper";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function HR() {
    const { t } = useTranslation("home");
    const { theme } = useThemeSwitcher();

    return (
        <div className="relative md:py-20">
            <Image
                src={`/icons/${theme}/ceo.svg`}
                alt="grid"
                width={100}
                height={500}
                className="hidden md:block right-0 top-1/2 -translate-y-1/2 absolute w-auto self-stretch overflow-hidden h-[110%] aspect-[0.5]"
            />
            <div className="flex flex-col overflow-y-visible md:flex-row md:items-center w-full md:w-5/6">
                <div className="md:w-1/2 w-full relative h-full aspect-[1.58]">
                    <Image
                        src={"/images/hr.png"}
                        alt="hr"
                        className="object-cover"
                        fill
                    />
                </div>
                <div className="relative w-full md:w-1/2 h-full py-10 md:py-0">
                    <div className="my-col-5 lg:gap-y-10 w-4/5 mx-auto">
                        <div className="text-big font-bold">
                            {t("hr.caption").toUpperCase()}
                        </div>
                        <div className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[72px] font-medium font-mont">
                            {t("hr.title").toUpperCase()}
                        </div>
                        <div className="text-[16px] w-2/3">
                            {t("hr.subtitle")}
                        </div>
                        <div className="flex text-[16px] w-full lg:w-11/12">
                            <input
                                type="email"
                                className="placeholder:text-[16px] w-full py-[15px] px-[30px] bg-[#f2f2f2] placeholder:text-black text-black"
                                placeholder={t("hr.placeholder")}
                            />
                            <input
                                type="button"
                                className="font-bold py-[15px] px-[30px] cursor-pointer text-white bg-blue"
                                value={t("hr.button")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
