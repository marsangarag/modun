import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

export default function Header() {
    const { t } = useTranslation("header");

    return (
        <motion.header className="fixed top-0 left-0 h-auto py-10 w-full z-50">
            {t("logo")}
        </motion.header>
    );
}
