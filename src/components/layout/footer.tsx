import { useTranslation } from "next-i18next";

export default function Footer() {
    const { t } = useTranslation("footer");
    // return <div>{t("address")}</div>;
    return (
        <footer className="flex flex-col gap-y-5">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-7">
                    <a href="mailto:info@modungroup.mn">info@modungroup.mn</a>
                </div>
            </div>
        </footer>
    );
}
