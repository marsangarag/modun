import { useTranslation } from "next-i18next";

export default function HrForm() {
    const { t } = useTranslation("hr");
    return (
        <div className="my-col-10 md:flex-row justify-between main-width">
            <div className="w-full md:w-1/5 font-extrabold text-[28px] font-mont md:text-[48px] lg:text-[64px] xl:text-[72px]">
                {t("caption").toUpperCase()}
            </div>
            <form className="w-full md:w-1/2 my-col-10 md:gap-y-[70px]">
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
                    className="cursor-pointer bg-blue self-start w-1/2 text-white font-mont py-6"
                    value={t("button")}
                />
            </form>
        </div>
    );
}
