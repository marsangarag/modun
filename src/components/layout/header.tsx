import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Header({ scrollPos }: { scrollPos: number }) {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const { pathname } = router;
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
    const { t, i18n } = useTranslation("header");
    const navItems = [
        { route: "/", title: "about" },
        { route: "business", title: "business" },
        { route: "news", title: "news" },
        { route: "/hr", title: "hr" },
        { route: "/lacolina", title: "lacolina" },
    ];

    const onNavigate = (route: string) => {
        setIsNavExpanded(false);
        router.push(route);
    };

    const onChangeLanguage = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrollPos > 150
                        ? "h-[100px] background-color"
                        : "h-20 bg-transparent"
                }`}
            >
                <div className="relative flex pt-2.5 justify-between gap-x-5 xl:gap-x-10 main-width h-full">
                    <motion.div
                        initial={{ paddingTop: 0 }}
                        animate={{ paddingTop: scrollPos > 150 ? 10 : 0 }}
                        className="cursor-pointer"
                        onClick={() => onNavigate("/")}
                        id="header-logo"
                    >
                        <Image
                            priority={true}
                            src={"/images/logo.png"}
                            alt="modun-logo"
                            width={150}
                            height={80}
                        />
                    </motion.div>
                    <div className="hamburger">
                        <label htmlFor="check">
                            <input
                                onChange={(e) =>
                                    setIsNavExpanded(e?.currentTarget?.checked)
                                }
                                type="checkbox"
                                id="check"
                            />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="flex gap-x-5 xl:gap-x-10 items-center self-center text-center">
                        {navItems.map((nav) => {
                            return (
                                <div
                                    onClick={() => onNavigate(nav.route)}
                                    key={nav.title}
                                    className={`nav-item group ${
                                        pathname === nav.route
                                            ? "font-bold"
                                            : ""
                                    }`}
                                >
                                    <div>{t(`${nav.title}`).toUpperCase()}</div>
                                    {pathname === nav.route ? null : (
                                        <div className="group-hover:w-full w-0 transition-[width] h-0.5 bg-black dark:bg-white rounded-sm absolute left-0 bottom-0"></div>
                                    )}
                                </div>
                            );
                        })}
                        <div
                            onClick={onChangeLanguage}
                            className="nav-item font-bold"
                        >
                            {i18n.language === "mn" ? "ENG" : "MN"}
                        </div>
                    </div>
                </div>
            </header>
            <motion.div
                initial={{ height: 0, background: "rgba(0,0,0,0)" }}
                animate={{
                    height: isNavExpanded ? "100vh" : 0,
                    background: isNavExpanded
                        ? theme === "light"
                            ? "rgba(256,256,256,1)"
                            : "rgba(0,0,0,1)"
                        : "rgba(0,0,0,0)",
                }}
                transition={{
                    duration: 0.4,
                    background: { delay: isNavExpanded ? 0 : 0.2 },
                }}
                className={`w-screen absolute pt-20 overflow-hidden inset-0 z-40 flex flex-col ${
                    scrollPos > 150 ? "pt-[100px]" : "pt-20"
                }`}
            >
                <div className="main-width">
                    {navItems.map((nav) => {
                        return (
                            <div
                                onClick={() => onNavigate(nav.route)}
                                key={nav.route + nav.title}
                                className="border-t border-color py-7 text-center"
                            >
                                <div>{t(`${nav.title}`)}</div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </>
    );
}
