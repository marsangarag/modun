import { useThemeSwitcher } from "@/lib/helper";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function HR() {
    const { t } = useTranslation("home");
    const { theme } = useThemeSwitcher();

    return (
        <div className="flex flex-col md:flex-row md:items-center relative lg:mt-20">
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-auto aspect-[0.5] h-[150%]">
                <Image src={`/icons/${theme}/ceo.svg`} alt="grid" fill />
            </div>
            <div className="md:w-2/3 w-full relative h-full aspect-[1.40]">
                <Image
                    src={"/images/hr.png"}
                    alt="hr"
                    className="object-cover"
                    fill
                />
            </div>
            <div className="relative w-full h-full py-10 md:py-0">
                <div className="my-col-5 md:my-col-10 w-4/5 mx-auto">
                    <div className="text-[24px] blue-text md:text-[32px] lg:text-[40px] xl:text-[72px] font-bold font-mont">
                        {t("hr.title")}
                    </div>
                    <div className="text-[16px] blue-text w-2/3">
                        {t("hr.subtitle")}
                    </div>
                    <div className="flex text-[16px] w-full lg:w-5/6">
                        <input
                            type="email"
                            className="placeholder:text-[16px] w-full py-[15px] px-[30px] bg-[#f2f2f2] placeholder:text-black text-black"
                            placeholder={t("hr.placeholder")}
                        />
                        <input
                            type="button"
                            className="font-bold py-[15px] px-[30px] cursor-pointer text-white bg-black dark:bg-blue"
                            value={t("hr.button")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
