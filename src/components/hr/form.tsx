import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function HrForm() {
    const { t } = useTranslation("hr");
    return (
        <div className="my-col-10 md:flex-row justify-between main-width md:items-stretch">
            <div className="w-full md:w-[45%] h-auto aspect-video relative">
                <Image
                    src={"/images/banner-form.png"}
                    className="object-cover"
                    alt="banner-form"
                    fill
                />
            </div>
            <form className="w-full md:w-1/2 my-col-5 md:gap-y-10 lg:gap-y-14">
                <label htmlFor="name" className="w-full text-sm cursor-default">
                    {t("name")}
                    <input
                        type="text"
                        className="border-b border-color bg-transparent"
                        id="name"
                    />
                </label>
                <label
                    htmlFor="phone"
                    className="w-full text-sm cursor-default md:hidden"
                >
                    {t("phone")}
                    <input
                        type="tel"
                        className="border-b border-color bg-transparent"
                        id="phone"
                    />
                </label>
                <label
                    htmlFor="phone"
                    className="w-full text-sm cursor-default hidden md:flex"
                >
                    {t("phone")}
                    <input
                        type="tel"
                        className="border-b border-color bg-transparent"
                        id="phone"
                    />
                </label>
                <label htmlFor="mail" className="w-full text-sm cursor-default">
                    {t("mail")}
                    <input
                        type="email"
                        className="border-b border-color bg-transparent"
                        id="mail"
                    />
                </label>
                <input
                    type="button"
                    className="cursor-pointer bg-blue self-start w-1/2 text-white font-mont py-2 sm:py-4 md:py-6"
                    value={t("button")}
                />
            </form>
        </div>
    );
}
