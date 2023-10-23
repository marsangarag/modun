import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function HR() {
    const { t } = useTranslation("home");
    return (
        <div className="flex flex-col md:grid grid-cols-7">
            <div className="col-span-3 relative w-full h-full aspect-[1.40]">
                <Image
                    src={"/images/hr.png"}
                    alt="hr"
                    className="object-cover"
                    fill
                />
            </div>
            <div
                style={{
                    backgroundImage: `url("/icons/dark/grid.svg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    backgroundSize: "contain",
                }}
                className="col-span-4 relative bg-blue text-white w-full h-full py-20 md:py-28 lg:py-36 xl:py-44"
            >
                <div className="my-col-5 md:my-col-10 w-4/5 mx-auto">
                    <div className="text-[24px]  md:text-[32px] lg:text-[40px] xl:text-[72px] font-bold">
                        {t("hr.title")}
                    </div>
                    <div className="text-[16px]">{t("hr.subtitle")}</div>
                    <div className="flex text-[16px] w-full lg  :w-5/6">
                        <input
                            type="email"
                            className="placeholder:text-[16px] bg-white w-full py-[15px] px-[30px] outline-none text-black"
                            placeholder={t("hr.placeholder")}
                        />
                        <input
                            type="button"
                            className="font-bold bg-black py-[15px] px-[30px] cursor-pointer"
                            value={t("hr.button")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
