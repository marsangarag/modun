import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import BurgerMenu from "../header/burger";

export default function Header() {
    const { t } = useTranslation("header");

    return (
        <motion.header className="fixed top-0 left-0 h-[100px] w-full z-50 px-10">
            <div className="relative flex justify-between items-center w-full h-full">
                <div
                    id="header-logo"
                    // initial={{ padding: "20px 0" }}
                    // animate={{ padding: "20px 0" }}
                >
                    {t("logo")}
                </div>
                <div className="hamburger">
                    <BurgerMenu />
                </div>
            </div>
        </motion.header>
    );
}
