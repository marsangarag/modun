import { useTranslation } from "next-i18next";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useThemeSwitcher } from "@/lib/helper";
import Switcher from "../common/switch";

export default function Header() {
    const router = useRouter();
    const { theme } = useThemeSwitcher();
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
    const { t } = useTranslation("header");
    const { scrollY } = useScroll();
    const [scrollPos, setScrollPos] = useState<number>(0);
    useMotionValueEvent(scrollY, "change", (latest) => setScrollPos(latest));

    const navItems = [
        { routes: ["/"], route: "/", title: "home" },
        { routes: ["/business"], route: "/business", title: "business" },
        { routes: ["/news", "/news/[slug]"], route: "/news", title: "news" },
        { routes: ["/hr"], route: "/hr", title: "hr" },
        { routes: ["/la-colina"], route: "/la-colina", title: "lacolina" },
    ];

    const onNavigate = (route: string) => {
        setIsNavExpanded(false);
        router.push(route);
    };

    return (
        <>
            <header
                className={`fixed font-mont top-0 left-0 w-full z-50 transition-all ${
                    scrollPos > 80
                        ? "h-[100px] background-color"
                        : "h-20 bg-transparent"
                }`}
            >
                <div className="relative flex pt-2.5 justify-between gap-x-8 xl:gap-x-[50px] main-width h-full">
                    <motion.div
                        initial={{ paddingTop: 0 }}
                        animate={{ paddingTop: scrollPos > 80 ? 10 : 0 }}
                        className="cursor-pointer"
                        onClick={() => onNavigate("/")}
                        id="header-logo"
                    >
                        <Image
                            priority={true}
                            src={`/images/${theme}/logo.png`}
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
                                        nav.routes.includes(router.pathname)
                                            ? "font-bold"
                                            : ""
                                    }`}
                                >
                                    <div>{t(`${nav.title}`)}</div>
                                    {nav.routes.includes(
                                        router.pathname
                                    ) ? null : (
                                        <div className="group-hover:w-full w-0 transition-[width] h-0.5 bg-blue rounded-sm absolute left-0 bottom-0"></div>
                                    )}
                                </div>
                            );
                        })}
                        <Switcher />
                        {/* <div
                            onClick={onChangeLanguage}
                            className="nav-item font-bold"
                        >
                            {i18n.language === "mn" ? "ENG" : "MN"}
                        </div> */}
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
                className={`w-screen fixed pt-20 overflow-hidden inset-0 z-40 flex flex-col ${
                    scrollPos > 80 ? "pt-[100px]" : "pt-20"
                }`}
            >
                <div className="w-2/3 mx-auto">
                    {navItems.map((nav) => {
                        return (
                            <div
                                onClick={() => onNavigate(nav.route)}
                                key={nav.route + nav.title}
                                className="border-t border-color py-7 text-center text-sm"
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
